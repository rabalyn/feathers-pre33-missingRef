import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Address, AddressData, AddressQuery } from './address.schema'

export interface AddressParams extends KnexAdapterParams<AddressQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class AddressService<ServiceParams extends Params = AddressParams> extends KnexService<
  Address,
  AddressData,
  ServiceParams
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'address'
  }
}
