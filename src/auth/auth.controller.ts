import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('ingresar')
  async login(@Body('correo') correo: string, @Body('clave') clave: string) {
    try {
      return this.authService.login(correo, clave);
    } catch (error) {
      throw new UnauthorizedException('El correo o la clave no son correctos.');
    }
  }
}
