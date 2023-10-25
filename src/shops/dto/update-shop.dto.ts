import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';

@InputType()
export class UpdateShopDto {
    @Field({nullable:true})
    name?:string

    @Field({nullable:true})
    addres?:string
}
