import { makeUpdateTaskController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const UpdateTasksHandler = async (request: Request): Promise<HttpResponse> => {
  const updateTasksController = makeUpdateTaskController()
  return updateTasksController.handle(request)
}
