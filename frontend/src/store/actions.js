import { loginService, userService, roleService } from '../services/provider'

export const actions = {
    setUser({ commit }, user) {
        if (user) {
            commit('setUser', user)
            localStorage.setItem('token', user.token)
        } else {
            commit('setUser', null)
            localStorage.removeItem('token')
        }
    },
    async login({dispatch}, form) {
        const loggedUser = await loginService.login(form)
        dispatch('setUser', loggedUser)
        return loggedUser
    },
    async register({dispatch}, form) {
        const registerUser = await loginService.register(form)
        dispatch('setUser', registerUser)
        return registerUser
    },
    async deleteUser(_, filter) {
        return userService.deleteUser(filter)
    },
    async getUsers() {
        return userService.getUsers()
    },
    async getUser(_, filter) {
        return userService.getUser(filter)
    },
    async newUser(_, user) {
        return userService.newUser(user)
    },
    async updateUser(_, {filter, user}) {
        return userService.updateUser(filter,user)
    },
    async getRoles() {
        return roleService.getRoles()
    },
    async getRole(_, role) {
        return roleService.getRole(role)
    },
    async newRole(_, role) {
        return roleService.newRole(role)
    },
    async updateRole(_, {filter, role}) {
        return roleService.updateRole(filter,role)
    },
    async deleteRole(_, filter) {
        return roleService.deleteRole(filter)
    }
};