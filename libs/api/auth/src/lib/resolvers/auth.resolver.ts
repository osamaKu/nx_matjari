import { Resolver, Args, Mutation } from '@nestjs/graphql'
import { CreateUserInput } from '../dto/register-user.input'
import AuthResult from '../models/auth-result.model'
import { AuthService } from '../services/auth.service'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResult, { nullable: true })
  async register(@Args('createUserInput') createUserInput: CreateUserInput): Promise<AuthResult> {
    return await this.authService.registerUser(createUserInput)
  }

  // @Mutation()
  // login() {
  //   return
  // }
}
