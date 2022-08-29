const {userService} = require('../../services/provider');

module.exports = {
    async login(_, { data }, context) {
        return userService.login(data, context.db);
    },
    users(_parent, _args, context) {
        context && context.validarAdmin();
        return userService.getUsers();
    },
    user(_, { filter }, context) {
        context && context.validarUsuarioFiltro(filter);
        return userService.getUser(filter);
    },
}