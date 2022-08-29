const db = require('../config/db');

class UserRepository {
    async findUsers() { 
        return db('user');
    };

    async findUserRole(id) { 
        const roleData = await db('role')
            .join(
                'user_role',
                'role.id',
                'user_role.role_id'
            )
            .where({ user_id: id })
            .first();
        return roleData.type;
    };

    async findUserById(id) { 
       return db('user').where({ id }).first();
    };

    async findUserByEmail(email) { 
        return db('user').where({ email }).first();
    };

    async saveUser(user) { 
        return db('user').insert(user);
    };

    async updateUser(user) { 
        console.log('update user',user);
        return db('user').where({ id: user.id }).update(user);
    };

    async deleteUser(id) { 
        return db('user').where({ id }).delete();
    };
};

module.exports = UserRepository;