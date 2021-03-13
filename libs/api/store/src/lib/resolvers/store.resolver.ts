import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { CreateStoreInput } from '../dto/create-store.input'
import { UpdateStoreInput } from '../dto/update-store.input'
import { Store } from '../models/store.model'
import { ApiStoreService } from '../services/store.service'
import { GqlAuthGuard, CtxUser, User } from '@v2matjari/api/auth'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiStoreResolver {
  constructor(private storeService: ApiStoreService) {}

  @Query(() => Store, { nullable: true })
  async findStoreById(@CtxUser() user: User, @Args('id') id: number): Promise<Store | undefined> {
    return await this.storeService.findStorById(id)
  }

  /**
   *
   * @param createStoreInput obj, userId number
   * @return Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async createStore(
    @CtxUser() user: User,
    @Args('createStoreInput') createStoreInput: CreateStoreInput,
  ): Promise<Store> {
    return await this.storeService.createStore(user.id, createStoreInput)
  }

  /**
   *
   * @param createStoreInput
   * @returns Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async updateStore(
    @CtxUser() user: User,
    @Args('updateStoreInput') updateStoreInput: UpdateStoreInput,
  ): Promise<Store> {
    return await this.storeService.FindByIdAndUpdateStore(updateStoreInput)
  }

  /**
   *
   * @param createStoreInput
   * @returns Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async deleteStore(@CtxUser() user: User, @Args('id') id: number): Promise<Store> {
    return await this.storeService.FindByIdAndDeleteStore(id)
  }
}
