import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  //connection to the mongodb
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ramchander:Password@cluster0.qdty8sj.mongodb.net/nestjs-mongodb?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
