/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TipWhereUniqueInput } from "../../tip/base/TipWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TipUpdateManyWithoutListingsInput {
  @Field(() => [TipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TipWhereUniqueInput],
  })
  connect?: Array<TipWhereUniqueInput>;

  @Field(() => [TipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TipWhereUniqueInput],
  })
  disconnect?: Array<TipWhereUniqueInput>;

  @Field(() => [TipWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TipWhereUniqueInput],
  })
  set?: Array<TipWhereUniqueInput>;
}

export { TipUpdateManyWithoutListingsInput as TipUpdateManyWithoutListingsInput };
