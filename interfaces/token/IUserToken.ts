import { IJwtDecoded } from '../app/IJwtDecoded';
import { enum_user_roles } from '../app/UserRoles';
export interface IUserToken extends IJwtDecoded {
	user_id: number;
	role: typeof enum_user_roles;
}
