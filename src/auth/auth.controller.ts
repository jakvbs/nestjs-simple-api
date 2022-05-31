import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: UserDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: UserDto, @Res({ passthrough: true }) res: Response) {
    const token = await this.authService.login(dto);
    res.cookie('token', token, {
      httpOnly: true,
    });
    return;
  }
}
