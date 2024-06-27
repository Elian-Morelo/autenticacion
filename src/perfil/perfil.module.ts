import { Module } from '@nestjs/common';
import { PerfilController } from './perfil.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PerfilController],
})
export class PerfilModule {}
