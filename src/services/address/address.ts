import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  addressDataValidator,
  addressQueryValidator,
  addressResolver,
  addressDataResolver,
  addressQueryResolver,
  addressExternalResolver
} from './address.schema'

import type { Application } from '../../declarations'
import { AddressService, getOptions } from './address.class'

export * from './address.class'
export * from './address.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const address = (app: Application) => {
  // Register our service on the Feathers application
  app.use('address', new AddressService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('address').hooks({
    around: {
      all: [authenticate('jwt')]
    },
    before: {
      all: [
        schemaHooks.validateQuery(addressQueryValidator),
        schemaHooks.validateData(addressDataValidator),
        schemaHooks.resolveQuery(addressQueryResolver),
        schemaHooks.resolveData(addressDataResolver)
      ]
    },
    after: {
      all: [schemaHooks.resolveResult(addressResolver), schemaHooks.resolveExternal(addressExternalResolver)]
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    address: AddressService
  }
}
