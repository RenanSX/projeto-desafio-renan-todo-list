import { MESSAGES } from '@/domain/entities'
import { EnsureAuthenticatedMiddleware } from '@/main/middlewares'
import { FastifyRequest, FastifyReply } from 'fastify'

const authUser = 'admin'
const authPassword = 'admin'

describe('EnsureAuthenticatedMiddleware', () => {
  let middleware: EnsureAuthenticatedMiddleware
  let mockRequest: Partial<FastifyRequest>
  let mockResponse: Partial<FastifyReply>

  beforeEach(() => {
    middleware = new EnsureAuthenticatedMiddleware()
    mockRequest = {
      headers: {
        authorization: 'Basic ' + Buffer.from(`${authUser}:${authPassword}`).toString('base64')
      }
    }
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
  })

  it('should return 401 if no authorization header is present', async () => {
    await middleware.handle(mockRequest as any, mockResponse as any)

    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.send).toHaveBeenCalledWith({ error: MESSAGES.tokenIsInvalid })
  })

  it('should return 401 if authorization header does not contain Basic', async () => {
    mockRequest.headers = { authorization: 'Bearer token' }

    await middleware.handle(mockRequest as any, mockResponse as any)

    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.send).toHaveBeenCalledWith({ error: MESSAGES.tokenIsMissing })
  })

  it('should return 401 if credentials do not match env variables', async () => {
    mockRequest.headers = { authorization: 'Basic ' + Buffer.from('wrongUser:wrongPassword').toString('base64') }

    await middleware.handle(mockRequest as any, mockResponse as any)

    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.send).toHaveBeenCalledWith({ error: MESSAGES.tokenIsInvalid })
  })
})
