import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './shops.service';
import { ShopController } from './shops.controller';
import { Shop } from './entities/shop.entity';
import { ShopsResolver } from './shops.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Shop])],
controllers: [ShopController],
  providers: [ShopService, ShopsResolver],
})
export class ShopsModule {}
