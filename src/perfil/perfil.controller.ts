import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('profile')
export class PerfilController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getProfileData() {
    //se muestra si el token es valido
    return { mensaje: 'Felicidades estas autorizado para usar el sistema' };
  }
}
