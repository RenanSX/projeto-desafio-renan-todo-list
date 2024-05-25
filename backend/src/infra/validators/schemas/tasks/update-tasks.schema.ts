import { FastifySchema } from 'fastify'

export const updateTaskSchema: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      completed: { type: 'boolean' },
      editing: { type: 'boolean' }
    }
  }
}
