import { JwtPayload } from 'jsonwebtoken';
import UserRole from 'src/app/shared/enums/user-role.enum';

export interface IJwtPayload extends JwtPayload{
  id: string;
  role: UserRole,
}
