import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeCreateTaskUsecase } from '@/main/factories/usecases/tasks'
import { CreateTaskController } from '@/presentation/controllers/tasks'
import { Controller } from '@/presentation/protocols'

export const makeCreateTaskController = (): Controller => {
  const createTaskUsecase = makeCreateTaskUsecase()
  const createTaskController = new CreateTaskController(createTaskUsecase)
  return makeLogControllerDecorator(createTaskController)
}
