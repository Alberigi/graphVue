const {roleService} = require('../../services/provider');

module.exports = {
    async newRole(_, { role }, context) {
        context && context.validarAdmin();
        return roleService.createRole(role);
    },
    async deleteRole(_, { filter }, context) {
        context && context.validarAdmin();
        return roleService.deleteRole(filter);
    },
    async updateRole(_, { filter, role }, context) {
        context && context.validarAdmin();
        return roleService.updateRole(filter, role);
    }
}