import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category)
  private readonly productRepo: Repository<Category>,){}

  create(createCategoryDto: CreateCategoryDto):Promise<Category>  {
    return this.productRepo.save(createCategoryDto);
  }

  findAll():Promise<Category[]> {
    return this.productRepo.find()
  }

  findOne(id: number):Promise<Category> {
    return this.productRepo.findOne({where:{id}})
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<Category>  {
    await this.productRepo.update({id}, {...updateCategoryDto})

    return this.findOne(id)
  }

  async remove(id: number):Promise<number>  {
    await this.productRepo.delete({id})
    return id
  }
}
