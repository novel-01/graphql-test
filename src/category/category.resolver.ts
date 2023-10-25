import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Resolver('categorys')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async GetAllCategorys() {
    return this.categoryService.findAll();
  }

    @Query(() => Category)
    async getOneCategory(@Args('id') id: number) {
      return this.categoryService.findOne(id);
}


    @Mutation(() => Category)
  async createCategory(@Args('createCategory') createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('id') id: number, @Args("updateCategory") updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Mutation(() => Number)
  async removeCategory(@Args('id', {type: () => ID}) id: number) {
    return this.categoryService.remove(+id);
  }
}
