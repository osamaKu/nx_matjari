import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'

@Injectable()
export class ApiDataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()

    // this.createUser({
    //   firstName: 'kassem',
    //   lastName: 'ku',
    //   email: 'kassem3@app.com',
    //   mobile: '1212121223',
    //   country: 'syria',
    //   password: '12121212',
    // })
  }

  /**
   * connect prisma on module compete init
   */
  public async onModuleInit() {
    await this.$connect()
  }

  /**
   * disconnect prisma on module destroy
   */
  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.user.findUnique({
      where: {
        email,
      },
    })
  }

  public async findUserById(userId: number): Promise<User> {
    return await this.user.findUnique({
      where: {
        id: userId,
      },
    })
  }
}
