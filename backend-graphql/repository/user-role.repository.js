const db = require('../config/db');

class UserRoleRepository {
    async createUserRole(data) { 
        return db('user_role').insert(data);
    };
    async deleteUserRole(id) { 
        return db('user_role').where({ user_id: id }).delete();
    };
    async deleteUserRoleByRole(id) { 
        return db('user_role').where({ role_id: id }).delete();
    };
};

module.exports = UserRoleRepository;