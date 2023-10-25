import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity('shops')
export class Shop {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field({nullable:true})
    @Column({nullable:true})
    name:string

    @Field()
    @Column()
    addres:string

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updateAt:Date
}
