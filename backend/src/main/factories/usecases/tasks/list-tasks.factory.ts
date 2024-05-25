import { ListTasksUsecase } from '@/data/usecases/tasks'
import { ListTasksRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeListTasksUsecase = (): ListTasksUsecase => {
  const listTasksRepository = new ListTasksRepository()
  return new ListTasksUsecase(listTasksRepository)
}
