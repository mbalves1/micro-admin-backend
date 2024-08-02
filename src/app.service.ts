import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category/category.interface';
import { Model } from 'mongoose';
import { Player } from './interfaces/players/player.interface';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
    @InjectModel('Player') private readonly playerModel: Model<Player>,
  ) {}

  private readonly logger = new Logger(AppService.name);

  async createCategory(category: Category): Promise<Category> {
    try {
      const categoryCreated = new this.categoryModel(category);
      return await categoryCreated.save();
    } catch (error) {
      this.logger.error(error);
      throw new RpcException(error.message);
    }
  }
}
