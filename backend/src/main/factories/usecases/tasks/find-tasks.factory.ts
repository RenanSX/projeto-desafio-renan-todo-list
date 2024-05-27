import { FindTaskUseCase } from '@/data/usecases/tasks'
import { FindTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeFindTaskUsecase = (): FindTaskUseCase => {
  const findTaskRepository = new FindTaskRepository()
  return new FindTaskUseCase(findTaskRepository)
}
