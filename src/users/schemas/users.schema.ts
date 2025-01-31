import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  correo: string;

  @Prop({ required: true })
  clave: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
