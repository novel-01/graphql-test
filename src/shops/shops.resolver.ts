import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './../users/users.service';
import { ShopService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';

@Resolver('shops')
export class ShopsResolver {
  constructor(private readonly shopService: ShopService) {}

  @Query(() => [Shop])
  async GetAllShops() {
    return this.shopService.findAll();
  }

    @Query(() => Shop)
    async getOneShops(@Args('id') id: number) {
      return this.shopService.findOne(id);
}


    @Mutation(() => Shop)
  async createShops(@Args('createShop') createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @Mutation(() => Shop)
  async updateShops(@Args('id') id: number, @Args("updateShop") updateShopDto: UpdateShopDto) {
    return this.shopService.update(id, updateShopDto);
  }

  @Mutation(() => Number)
  async removeShops(@Args('id', {type: () => ID}) id: number) {
    return this.shopService.remove(+id);
  }
}
