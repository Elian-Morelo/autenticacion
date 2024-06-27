import { IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @Min(6)
  clave: string;
}
