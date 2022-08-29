const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');

const CryptoService = require('./crypto.service');
const RoleService = require('./role.service');
const UserService = require('./user.service');

const UserRepository = require('../repository/user.repository');
const RoleRepository = require('../repository/role.repository');
const UserRoleRepository = require('../repository/user-role.repository');

const roleRepository = new RoleRepository();
const userRepository = new UserRepository();
const userRoleRepository = new UserRoleRepository();

const cryptoService = new CryptoService(bcrypt, jwt);
const roleService = new RoleService(roleRepository,userRoleRepository);
const userService = new UserService(roleService, cryptoService, userRepository, roleRepository, userRoleRepository);

module.exports = {roleService, userService, cryptoService};