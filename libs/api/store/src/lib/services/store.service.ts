import { Injectable } from '@nestjs/common'
import { CreateStoreInput } from '../dto/create-store.input'
import { UpdateStoreInput } from '../dto/update-store.input'
import Store from '../models/store.model'
import { ApiDataService } from '@v2matjari/api/data'

@Injectable()
export class ApiStoreService {
  constructor(private readonly data: ApiDataService) {}

  /**
   * include owner of store and store products
   */
  private readonly storeIncludes = {
    owner: true,
  }

  /**
   *
   * @param id string
   * @return Promise Store obj | undefined
   */
  public async findStorById(id: number): Promise<Store | undefined> {
    const store = this.data.store.findFirst({
      where: { id },
      include: this.storeIncludes,
    })

    if (store) return store

    return undefined
  }

  /**
   *
   * @param createStoreInput obj, userId number
   * @return Promise Store obj
   */
  async createStore(userId: number, createStoreInput: CreateStoreInput): Promise<Store> {
    return await this.data.store.create({
      data: {
        ...createStoreInput,
        owner: { connect: { id: userId } },
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
