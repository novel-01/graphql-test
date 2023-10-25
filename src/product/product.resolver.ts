import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { CategoryResolver } from '../category/category.resolver';
import { Category } from './../category/entities/category.entity';

@Resolver('products')
export class ProductResolver {
  constructor(private readonly productService: ProductService, private readonly categoryResolver:CategoryResolver) {}

  @Query(() => [Product])
  async GetAllProducts() {
    return this.productService.findAll();
  }

    @Query(() => Product)
    async getOneProduct(@Args('id') id: number) {
      return this.productService.findOne(id);
}


  @Mutation(() => Product)
  async createProduct(@Args('createProduct') createProductDto: CreateProductDto, @Args('categoryID') categoryId:number) {
    const category = await this.categoryResolver.getOneCategory(categoryId)
    return this.productService.create(createProductDto, category);
  }

    @Mutation(() => Product)
  async updateProduct(@Args('id') id: number, @Args("updateProduct") updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Mutation(() => Number)
  async removeProduct(@Args('id', {type: () => ID}) id: number) {
    return this.productService.remove(+id);
  }
}
