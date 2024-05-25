import { EnsureAuthenticatedMiddleware } from '@/main/middlewares'

export const makeEnsureAuthenticatedMiddleware = (): EnsureAuthenticatedMiddleware => {
  return new EnsureAuthenticatedMiddleware()
}
