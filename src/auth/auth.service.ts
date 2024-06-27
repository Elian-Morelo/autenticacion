import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(correo: string, clave: string): Promise<User> {
    const user = await this.usersService.findOne(correo);
    if (!user) {
      return null; // Retorna null si el usuario no se encuentra
    }
    const claveEstaBien = await bcrypt.compare(clave, user.clave);

    if (claveEstaBien) {
      return user;
    }
    return null;
  }

  async login(correo: string, clave: string) {
    const user = await this.validateUser(correo, clave);
    if (!user) {
      throw new UnauthorizedException(
        'Incorrect credentials or user does not exist',
      );
    }

    const payload = { correo: user.correo, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
