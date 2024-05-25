import { makeListTasksController } from '@/main/factories/controllers/tasks'
import { HttpResponse, Request } from '@/presentation/protocols'

export const ListTasksHandler = async (request: Request): Promise<HttpResponse> => {
  const createListTasks = makeListTasksController()
  return createListTasks.handle(request)
}
