const {userService} = require('../../services/provider');

const mutations = {
    registerUser(_, { user }) {
        return mutations.newUser(_, {
            user: {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        });
    },

    async newUser(_, { user }, context) {
        context && context.validarAdmin();
        return userService.createUser(user);
    },

    async deleteUser(_, { filter }, context) {
        context && context.validarAdmin();
        return userService.deleteUser(filter);
    },
    async updateUser(_, { filter, data }, context) {
        context && context.validarUsuarioFiltro(filter);
        return userService.updateUser(filter, data);
    }
}

module.exports = mutations