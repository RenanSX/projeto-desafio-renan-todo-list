import { FastifySchema } from 'fastify'

export const createTaskSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['title', 'description'],
    properties: {
      title: { type: 'string' },
      description: { type: 'string' }
    }
  }
}
