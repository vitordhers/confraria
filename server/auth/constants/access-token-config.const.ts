import { ConfigService } from '@nestjs/config/dist/config.service';

const strategy = {
  provide: 'ACCESS_TOKEN_STRATEGY_CONFIG',
  useFactory: (configService: ConfigService) => {
    return {
      secret: configService.get<string>('ACCESS_TOKEN_SECRET_PUBLIC')!,
    };
  },
  inject: [ConfigService],
};

export default strategy;
