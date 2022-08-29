const UserRepository = require('./user.repository');
const RoleRepository = require('./role.repository');
const UserRoleRepository = require('./user-role.repository');

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();
const userRoleRepository = new UserRoleRepository();

module.exports = {userRepository, roleRepository, userRoleRepository};