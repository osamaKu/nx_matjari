import { Injectable } from '@nestjs/common'
import { CreateStoreInput } from '../dto/create-store'
import { UpdateStoreInput } from '../dto/update-store'
import Store from '../models/store.model'

@Injectable()
export class StoreService {
  // constructor() {}

  /**
   *
   * @param id string
   * @return Promise Store obj | undefined
   */
  public async findStorById(id: string): Promise<Store | undefined> {
    console.log(id)

    return undefined
  }

  /**
   *
   * @param updateStoreInput
   * @return Promise Store obj
   */
  async createStore(createStoreInput: CreateStoreInput): Promise<Store> {
    const store = {
      id: Date.now().toString(),
      ...createStoreInput,
    }

    return store
  }

  /**
   *
   * @param updateStoreInput obj
   * @return Promise Store obj
   */
  async FindByIdAndUpdateStore(updateStoreInput: UpdateStoreInput): Promise<Store> {
    const store = {
      id: '12-0',
      name: 'qiow',
      description: 'qwpo',
      url: 'oiqw',
    }

    return store
  }

  /**
   *
   * @param updateStoreInput obj
   * @return Promise Store obj
   */
  async FindByIdAndDeleteStore(id: string): Promise<Store> {
    const store = {
      id: '12-0',
      name: 'qiow',
      description: 'qwpo',
      url: 'oiqw',
    }

    return store
  }
}
