import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeUpdateTaskUsecase } from '@/main/factories/usecases/tasks'
import { UpdateTaskController } from '@/presentation/controllers/tasks'
import { Controller } from '@/presentation/protocols'

export const makeCompleteTakskController = (): Controller => {
  const updateTaskUsecase = makeUpdateTaskUsecase()
  const updateTaskController = new UpdateTaskController(updateTaskUsecase)
  return makeLogControllerDecorator(updateTaskController)
}
