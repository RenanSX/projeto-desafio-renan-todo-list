import { makeEnsureAuthenticatedMiddleware } from '../factories/middlewares/authenticate.factory'
import * as TaskSchema from '@/infra/validators/schemas/tasks'
import * as TasksRoute from '@/main/routes/tasks'
import { Handler, Request, Response } from '@/presentation/protocols'

const createRouteHandler = (handler: Handler) => async (request: Request, reply: Response) => {
  const result = await handler(request)
  reply.code(result.statusCode).send(result)
}

const createAuthMiddleware = () => {
  const authMiddleware = makeEnsureAuthenticatedMiddleware()
  return authMiddleware.handle.bind(authMiddleware)
}

export const TaskRoutes = [
  {
    method: 'GET',
    url: '/tasks',
    handler: createRouteHandler(TasksRoute.ListTasksHandler),
    preHandler: createAuthMiddleware()
  },
  {
    method: 'GET',
    url: '/tasks/:id',
    handler: createRouteHandler(TasksRoute.FindTasksHandler),
    preHandler: createAuthMiddleware(),
    schema: TaskSchema.findTaskSchema
  },
  {
    method: 'POST',
    url: '/tasks',
    handler: createRouteHandler(TasksRoute.CreateTasksHandler),
    preHandler: createAuthMiddleware(),
    schema: TaskSchema.createTaskSchema
  },
  {
    method: 'PATCH',
    url: '/tasks/:id',
    handler: createRouteHandler(TasksRoute.UpdateTasksHandler),
    preHandler: createAuthMiddleware(),
    schema: TaskSchema.updateTaskSchema
  },
  {
    method: 'DELETE',
    url: '/tasks/:id',
    handler: createRouteHandler(TasksRoute.DeleteTasksHandler),
    preHandler: createAuthMiddleware(),
    schema: TaskSchema.deleteTaskSchema
  },
  {
    method: 'POST',
    url: '/tasks/:id/complete',
    handler: createRouteHandler(TasksRoute.CompleteTaskHandler),
    preHandler: createAuthMiddleware(),
    schema: TaskSchema.completeTaskSchema
  }
]

export const routes = [...TaskRoutes]
