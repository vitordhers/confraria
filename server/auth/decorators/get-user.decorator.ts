import { createParamDecorator } from '@nestjs/common';
import { IDbUser } from 'src/app/interfaces/db-user.interface';

export const GetUser = createParamDecorator((_, req): IDbUser => {
  return req.user;
});
