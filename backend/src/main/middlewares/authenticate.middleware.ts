import { MESSAGES } from '@/domain/entities'
import { Request, Response, HttpResponse, Middleware } from '@/presentation/protocols'
import env from '@/main/config/env'

export class EnsureAuthenticatedMiddleware implements Middleware {
  async handle(request: Request, response: Response): Promise<HttpResponse> {
    try {
      if (!request.headers.authorization || request.headers.authorization.indexOf('Basic ') === -1) {
        return response.status(401).send({ error: MESSAGES.tokenIsMissing })
      }
      // verify auth credentials
      const headerAuth = request.headers.authorization as string
      const base64Credentials = headerAuth.split(' ')[1]
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
      const [username, password] = credentials.split(':')

      if (username !== env.authUser || password !== env.authPassword) {
        return response.status(401).send({ error: MESSAGES.tokenIsInvalid })
      }
    } catch (error) {
      return response.status(401).send({ error: MESSAGES.tokenIsInvalid })
    }
  }
}
