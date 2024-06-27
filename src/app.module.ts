import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PerfilModule } from './perfil/perfil.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://elian30w:20010411@ac-vxfraew-shard-00-00.vnlkthx.mongodb.net:27017,ac-vxfraew-shard-00-01.vnlkthx.mongodb.net:27017,ac-vxfraew-shard-00-02.vnlkthx.mongodb.net:27017/db_users?replicaSet=atlas-6ku4by-shard-0&ssl=true&authSource=admin',
    ),
    UsersModule,
    AuthModule,
    PerfilModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
