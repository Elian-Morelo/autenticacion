import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const claveHasheada = await bcrypt.hash(createUserDto.clave, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      clave: claveHasheada,
    });
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(correo: string): Promise<User> {
    return this.userModel.findOne({ correo });
  }
}
