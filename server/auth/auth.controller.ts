import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import mapPayloadToResponse from 'server/shared/functions/map-payload-to-response.function';
import mapRequestToResponse from 'server/shared/functions/map-request-to-response.function';
import UserRole from 'src/app/shared/enums/user-role.enum';
import { AuthService } from './auth.service';
import { GetDataFromRefreshToken } from './decorators/get-data-from-refresh-token.decorator';
import { SignInDto } from './dto/signin.dto';
import { RefreshToken } from './guards/refresh-token.guard';
import { Credentials } from './interfaces/credentials.interface';
import { TokenService } from './jwt.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  @Get('token')
  @UseGuards(RefreshToken)
  async refreshToken(
    @GetDataFromRefreshToken()
    {
      user: { id, role },
      refreshToken,
    }: {
      user: { id: string; role: UserRole };
      refreshToken: string;
    }
  ) {
    const accessToken = await this.tokenService.createAccessToken({ id, role });
    return mapPayloadToResponse<Credentials>(true, {
      accessToken,
      refreshToken,
    });
  }

  @Get()
  async credentials() {
    return await this.tokenService.getCredentials(
      { id: 'abc', role: UserRole.ADMIN },
      true
    );
  }

  @Post('/signin')
  async signIn(@Body() signInDto: SignInDto) {
    return await mapRequestToResponse<Credentials>(
      this.authService,
      this.authService.signIn,
      signInDto
    );
  }
}
