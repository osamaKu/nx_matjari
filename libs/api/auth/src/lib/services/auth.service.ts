import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiDataService } from '@v2matjari/api/data'
import { CreateUserInput } from '../dto/register-user.input'
import { AuthHelper } from '../auth.helper'
import AuthResult from '../models/auth-result.model'
import User from '../models/user.model'
import { JwtDto } from '../dto/jwt.dto'
import { LoginUserInput } from '../dto/login-user.input'

@Injectable()
export class AuthService {
  constructor(private readonly data: ApiDataService, private jwt: JwtService) {}

  public async registerUser(createUserInput: CreateUserInput): Promise<AuthResult> {
    // check unique email
    const existEmail = await this.data.findUserByEmail(createUserInput.email)

    if (existEmail) {
      throw new BadRequestException(`Cannot register with email ${createUserInput.email}, Email already in use`)
    }

    const password = await AuthHelper.hash(createUserInput.password)

    const newUser: User = await this.data.user.create({
      data: {
        ...createUserInput,
        password,
      },
    })

    const token: string = this.signToken(newUser.id)

    const result = {
      user: newUser,
      token,
    }

    return result
  }

  /**
   *
   * @param loginUserInput
   * @returns user obj, token string
   */
  public async loginUser(loginUserInput: LoginUserInput): Promise<AuthResult | undefined> {
    const found = await this.data.findUserByEmail(loginUserInput.email)
    if (!found) {
      throw new NotFoundException(`User with email ${loginUserInput.email} does not exist`)
    }

    const passwordValid = await AuthHelper.validate(loginUserInput.password, found.password)

    if (!passwordValid) {
      throw new Error(`Invalid password`)
    }

    return { user: found, token: this.signToken(found.id) }
  }

  /**
   *
   * @param userId
   * @returns promise user obj
   */
  public async validateUser(userId: number): Promise<User> {
    return await this.data.findUserById(userId)
  }

  private signToken(id: number) {
    const payload: JwtDto = { userId: id }

    return this.jwt.sign(payload)
  }
}
