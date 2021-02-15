import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './interfaces/user.interface';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://treinamento:Treinamento2021@treinamento.ukkhu.mongodb.net/<dbname>?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'USER', schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
