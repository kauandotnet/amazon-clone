import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductsModel {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int, { nullable: true })
  price: number;

  @Field(() => Int, { nullable: true })
  rating: number;

  @Field(() => String, { nullable: true })
  imgUrl: string;
}
