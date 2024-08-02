import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategorySchema } from './interfaces/category/category.scheme';
import { PlayerSchema } from './interfaces/players/player.scheme';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://murilobalves1:XACPq5wGyq16WbYu@cluster0.jzsum4t.mongodb.net/smartranking?retryWrites=true&w=majority&appName=Cluster0',
    ), // data base muda microservice
    MongooseModule.forFeature([
      { name: 'Category', schema: CategorySchema },
      { name: 'Player', schema: PlayerSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
