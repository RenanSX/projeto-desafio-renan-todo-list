import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeFindTaskUsecase } from '@/main/factories/usecases/tasks'
import { FindTaskController } from '@/presentation/controllers/tasks'
import { Controller } from '@/presentation/protocols'

export const makeFindTaskController = (): Controller => {
  const findTaskUsecase = makeFindTaskUsecase()
  const findTaskController = new FindTaskController(findTaskUsecase)
  return makeLogControllerDecorator(findTaskController)
}
