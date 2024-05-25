import { FastifySchema } from 'fastify'

export const deleteTaskSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  }
}
