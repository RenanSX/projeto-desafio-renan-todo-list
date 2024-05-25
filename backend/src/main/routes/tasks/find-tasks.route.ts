import { makeFindTaskController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const FindTasksHandler = async (request: Request): Promise<HttpResponse> => {
  const createFindTasks = makeFindTaskController()
  return createFindTasks.handle(request)
}
