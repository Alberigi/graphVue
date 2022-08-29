import { LoginService } from './login.service';
import { UserService } from './user.service';
import { RoleService } from './role.service';
import { apollo } from '../plugins/apollo';

const loginService = new LoginService(apollo);
const userService = new UserService(apollo);
const roleService = new RoleService(apollo);

export { loginService,userService,roleService }