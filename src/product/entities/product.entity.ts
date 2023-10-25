import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@ObjectType()
@Entity('products')
export class Product {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field({nullable:true})
    @Column({nullable:true})
    name:string

    @Field()
    @Column()
    image:string

    @Field()
    @Column()
    price:number

    @ManyToOne((type) => Category, (category) => category.products)
    @Field((type) => Category)
    category:Category

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updateAt:Date
}
