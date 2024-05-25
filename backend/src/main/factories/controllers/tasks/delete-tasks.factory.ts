import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDeleteTaskUsecase } from '@/main/factories/usecases/tasks'
import { DeleteTaskController } from '@/presentation/controllers/tasks'
import { Controller } from '@/presentation/protocols'

export const makeDeleteTaskController = (): Controller => {
  const deleteTaskUsecase = makeDeleteTaskUsecase()
  const deleteTaskController = new DeleteTaskController(deleteTaskUsecase)
  return makeLogControllerDecorator(deleteTaskController)
}
