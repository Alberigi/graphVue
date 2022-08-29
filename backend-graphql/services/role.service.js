class RoleService {
    roleRepository = {};
    userRoleRepository = {};

    constructor(roleRepository, userRoleRepository) { 
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
    };

    async getRoles() {
        return this.roleRepository.findRoles();
    };

    async getRole(type) {
        if (!type) return null;
        return this.roleRepository.findRoleByType(type);
    }

    async createRole( role ) {
        try {
            const newRole = {type:role}
            const [id] = await this.roleRepository.saveRole(newRole);
            return this.roleRepository.findRoleById(id);
        } catch(e) {
            throw new Error(e.sqlMessage);
        }
    };

    async deleteRole(filter) {
        try {
            const role = await this.getRole(filter.type);
            await this.userRoleRepository.deleteUserRoleByRole(role.id);
            await this.roleRepository.deleteRole(role.id);
            return role;
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    };

    async updateRole(filter, role ) {
        try {
            const data = await this.getRole(filter.type);
            await this.roleRepository.updateRole(data.id, {type:role});
            return { ...data, ...role }
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    }
};

module.exports = RoleService;