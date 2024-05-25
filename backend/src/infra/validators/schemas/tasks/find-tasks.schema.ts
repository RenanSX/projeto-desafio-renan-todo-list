import { FastifySchema } from 'fastify'

export const findTaskSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  }
}
