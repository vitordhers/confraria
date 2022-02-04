import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { ProductsModule } from './products/products.module';
import { UnitsModule } from './units/units.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/confraria/browser'),
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'server/.env' }),
    // AuthModule,
    // UnitsModule,
    // ProductsModule,
    // UsersModule,
  ],
  controllers: [AppController]
})
export class AppModule {}
