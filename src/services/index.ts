import { address } from './address/address'
import { user } from './users/users'
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(address)
  app.configure(user)
  // All services will be registered here
}
