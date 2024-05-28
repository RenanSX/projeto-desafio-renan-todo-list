import { makeCompleteTakskController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const CompleteTaskHandler = async (request: Request): Promise<HttpResponse> => {
  const updateTasksController = makeCompleteTakskController()
  return updateTasksController.handle(request)
}
