import { ListTasksUseCase } from '@/data/usecases/tasks'
import { ListTasksRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeListTasksUsecase = (): ListTasksUseCase => {
  const listTasksRepository = new ListTasksRepository()
  return new ListTasksUseCase(listTasksRepository)
}
