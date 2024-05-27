import { MESSAGES } from '@/domain/entities'
import env from '@/main/config/env'
import { Request, Response, HttpResponse, Middleware } from '@/presentation/protocols'

export class EnsureAuthenticatedMiddleware implements Middleware {
  async handle(request: Request, response: Response): Promise<HttpResponse> {
    if (!request.headers.authorization || request.headers.authorization.indexOf('Basic ') === -1) {
      return response.status(401).send({ error: MESSAGES.tokenIsMissing })
    }
    // verify auth credentials
    const headerAuth = request.headers.authorization
    const base64Credentials = headerAuth.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username !== env.authUser || password !== env.authPassword) {
      return response.status(401).send({ error: MESSAGES.tokenIsInvalid })
    }
  }
}
