const {roleService} = require('../../services/provider');

module.exports = {
    roles(_parent, _args, context) {
        context && context.validarAdmin();
        return roleService.getRoles();
    },
    role(_, { filter }, context) {
        context && context.validarAdmin();
        return roleService.getRole(filter);
    }
}