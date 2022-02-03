import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'server/db/faunadb.module';
import { TokenService } from 'server/auth/jwt.service';
import { JwtModule } from '@nestjs/jwt';
import AccessTokenStrategyConfigFactory from '../auth/constants/access-token-config.const';


@Module({
  imports: [DbModule, JwtModule.register({}),],
  controllers: [UsersController],
  providers: [UsersService, TokenService,
    AccessTokenStrategyConfigFactory,],
  exports: [UsersService],
})
export class UsersModule {}
