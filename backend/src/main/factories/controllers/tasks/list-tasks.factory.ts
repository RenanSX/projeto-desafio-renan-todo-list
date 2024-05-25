import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeListTasksUsecase } from '@/main/factories/usecases/tasks'
import { ListTasksController } from '@/presentation/controllers/tasks'
import { Controller } from '@/presentation/protocols'

export const makeListTasksController = (): Controller => {
  const listTasksUsecase = makeListTasksUsecase()
  const listTasksController = new ListTasksController(listTasksUsecase)
  return makeLogControllerDecorator(listTasksController)
}
