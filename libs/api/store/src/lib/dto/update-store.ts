import { InputType, Field } from '@nestjs/graphql'
import { IsOptional, Length, IsString } from 'class-validator'

@InputType()
export class UpdateStoreInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(3, 191)
  name?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(3, 191)
  description?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(3, 191)
  url?: string
}
