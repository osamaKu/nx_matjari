import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { CreateStoreInput } from '../dto/create-store'
import { UpdateStoreInput } from '../dto/update-store'
import { Store } from '../models/store.model'
import { StoreService } from '../services/store.service'

@Resolver()
export class StoreResolver {
  constructor(private storeService: StoreService) {}

  @Query(() => Store, { nullable: true })
  async findById(@Args('id') id: string): Promise<Store | undefined> {
    return await this.storeService.findStorById(id)
  }

  /**
   *
   * @param createStoreInput
   * @return Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async createStore(@Args('createStoreInput') createStoreInput: CreateStoreInput): Promise<Store> {
    return await this.storeService.createStore(createStoreInput)
  }

  /**
   *
   * @param createStoreInput
   * @returns Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async updateStore(@Args('updateStoreInput') updateStoreInput: UpdateStoreInput): Promise<Store> {
    return await this.storeService.FindByIdAndUpdateStore(updateStoreInput)
  }

  /**
   *
   * @param createStoreInput
   * @returns Promise Store obj
   */
  @Mutation(() => Store, { nullable: true })
  async deleteStore(@Args('id') id: string): Promise<Store> {
    return await this.storeService.FindByIdAndDeleteStore(id)
  }
}
