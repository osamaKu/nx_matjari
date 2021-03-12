import { Injectable } from '@nestjs/common'
import { CreateStoreInput } from '../dto/create-store.input'
import { UpdateStoreInput } from '../dto/update-store.input'
import Store from '../models/store.model'
import { ApiDataService } from '@v2matjari/api/data'

@Injectable()
export class ApiStoreService {
  constructor(private readonly data: ApiDataService) {}

  /**
   *
   * @param id string
   * @return Promise Store obj | undefined
   */
  public async findStorById(id: string): Promise<Store | undefined> {
    return undefined
  }

  /**
   *
   * @param updateStoreInput
   * @return Promise Store obj
   */
  async createStore(createStoreInput: CreateStoreInput): Promise<Store> {
    return await this.data.store.create({
      data: {
        ...createStoreInput,
      },
    })
  }

  /**
   *
   * @param updateStoreInput obj
   * @return Promise Store obj
   */
  async FindByIdAndUpdateStore(updateStoreInput: UpdateStoreInput): Promise<Store> {
    const store = {
      id: 1,
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
  async FindByIdAndDeleteStore(id: number): Promise<Store> {
    const store = {
      id: 1,
      name: 'qiow',
      description: 'qwpo',
      url: 'oiqw',
    }

    return store
  }
}
