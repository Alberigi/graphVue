
class UserService {
    roleService = {};
    cryptoService = {};
    userRepository = {};
    roleRepository = {};
    userRoleRepository = {};

    constructor(roleService, cryptoService, userRepository, roleRepository, userRoleRepository) { 
        this.roleService = roleService;
        this.cryptoService = cryptoService;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
    };
    
    async login(data) {
        const user = await this.userRepository.findUserByEmail(data.email);
        
        if (!user) {
            throw new Error('Usuario não cadastrado');
        }
        
        this.cryptoService.validatePassword(data.password, user.password);
        
        return this.setUserLogin(user);
    };
    
    async setUserLogin(user) {
        const roleData = await this.userRepository.findUserRole(user.id);
        const now = Math.floor(Date.now() / 1000);

        const userInfo = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: roleData,
            iat: now,
            exp: now + (3 * 24 * 60 * 60)
        };

        return this.cryptoService.encodeLogin(userInfo);
    };

    async getUsers() {
        const users = await this.userRepository.findUsers();
        for (const user of users) {
            user.role  = await this.userRepository.findUserRole(user.id);
        }
        return users;
    };

    async getUser(filter) {
        if (!filter) return null;

        const { id, email } = filter;
        let user = null;

        if (id) user = await this.userRepository.findUserById(id);
        if(email) user = await this.userRepository.findUserByEmail(email);
        if (!user) return null;
        
        user.role = await this.userRepository.findUserRole(user.id);
        return user;
    };

    async createUser(data) {
        try {   
            !data.role && (data.role = 'comum')
            
            const {id: role_id, type} = await this.roleService.getRole(data.role);
            
            data.password = this.cryptoService.cryptoPassword(data.password);
            delete data.role

            const [user_id]  = await this.userRepository.saveUser(data);
            await this.userRoleRepository.createUserRole({ user_id, role_id });

            const user = await this.userRepository.findUserById(user_id);
            user.role = type;

            return user;
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    };

    async updateUser(filter, data ) {
        try {
            const user = await this.getUser(filter);
            
            if (!user) return null;
            
            if(data.role) {
                await this.userRoleRepository.deleteUserRole(user.id);
                
                const roleData = await this.roleService.getRole(data.role);
                
                if(roleData) {
                    await this.userRoleRepository.createUserRole({role_id: roleData.id, user_id: user.id })
                }
            }
            
            if (data.password) {
                data.password = this.cryptoService.cryptoPassword(data.password);
            }
            
            delete data.role
            await this.userRepository.updateUser({id: user.id,...data});
            
            return { ...user, ...data };
        } catch(e) {
            throw new Error(e)
        }
    }

    async deleteUser(filter) {
        try {
            const user = await this.getUser(filter);
            await this.userRoleRepository.deleteUserRole(user.id);
            await this.userRepository.deleteUser(user.id);
            return user;
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    };
};

module.exports = UserService;