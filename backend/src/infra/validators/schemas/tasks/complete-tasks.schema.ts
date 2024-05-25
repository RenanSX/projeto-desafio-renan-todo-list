import { FastifySchema } from 'fastify'

export const completeTaskSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    required: ['completed'],
    properties: {
      completed: { type: 'boolean' }
    }
  }
}
