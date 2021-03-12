import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, Length, IsOptional, Min, IsEmail } from 'class-validator'

@ObjectType()
export class User {
  @Field(() => Number, { nullable: true })
  @IsOptional()
  id?: number

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  firstName: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  lastName: string

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  country: string

  @Field(() => String)
  @IsNotEmpty()
  @Min(8)
  mobile: string

  @IsNotEmpty()
  @Min(8)
  password: string
}

export default User
