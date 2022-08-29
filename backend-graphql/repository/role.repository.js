const db = require('../config/db');

class RoleRepository {
    async findRoles() { 
        return db('role');
    };

    async findRoleById(id) { 
       return db('role').where({ id }).first();
    };

    async findRoleByType(type) { 
        return db('role').where({ type }).first();
    };

    async saveRole(role) { 
        return db('role').insert(role);
    };

    async updateRole(id, role) { 
        return db('role').where({ id }).update(role);
    };

    async deleteRole(id) { 
        return db('role').where({ id }).delete();
    };
};

module.exports = RoleRepository;