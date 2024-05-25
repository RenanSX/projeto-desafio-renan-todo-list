import { FindTaskUsecase } from '@/data/usecases/tasks'
import { FindTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeFindTaskUsecase = (): FindTaskUsecase => {
  const findTaskRepository = new FindTaskRepository()
  return new FindTaskUsecase(findTaskRepository)
}
