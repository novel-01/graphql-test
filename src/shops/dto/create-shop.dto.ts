import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateShopDto {
    @Field({nullable:true})
    name:string

    @Field()
    addres:string
}
