import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@ObjectType()
@Entity('categorys')
export class Category {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field({nullable:true})
    @Column({nullable:true})
    name:string

    
    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updateAt:Date

    @OneToMany((type) => Product, (product) => product.category)
    @Field((type) => [Product])
    products:Product[]
}
