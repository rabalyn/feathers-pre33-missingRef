import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const addressSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Address', additionalProperties: false }
)
export type Address = Static<typeof addressSchema>
export const addressResolver = resolve<Address, HookContext>({
  properties: {}
})

export const addressExternalResolver = resolve<Address, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const addressDataSchema = Type.Pick(addressSchema, ['text'], {
  $id: 'AddressData',
  additionalProperties: false
})
export type AddressData = Static<typeof addressDataSchema>
export const addressDataValidator = getDataValidator(addressDataSchema, dataValidator)
export const addressDataResolver = resolve<Address, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const addressQueryProperties = Type.Pick(addressSchema, ['id', 'text'], {
  additionalProperties: false
})
export const addressQuerySchema = querySyntax(addressQueryProperties)
export type AddressQuery = Static<typeof addressQuerySchema>
export const addressQueryValidator = getValidator(addressQuerySchema, queryValidator)
export const addressQueryResolver = resolve<AddressQuery, HookContext>({
  properties: {}
})
