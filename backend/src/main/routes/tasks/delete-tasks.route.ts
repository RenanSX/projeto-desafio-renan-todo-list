import { makeDeleteTaskController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const DeleteTasksHandler = async (request: Request): Promise<HttpResponse> => {
  const deleteTasksController = makeDeleteTaskController()
  return deleteTasksController.handle(request)
}
