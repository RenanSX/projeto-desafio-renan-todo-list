import { makeCreateTaskController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const CreateTasksHandler = async (request: Request): Promise<HttpResponse> => {
  const createTasks = makeCreateTaskController()
  return createTasks.handle(request)
}
