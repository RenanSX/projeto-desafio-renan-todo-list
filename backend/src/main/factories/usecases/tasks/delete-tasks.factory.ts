import { DeleteTaskUseCase } from '@/data/usecases/tasks'
import { DeleteTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeDeleteTaskUsecase = (): DeleteTaskUseCase => {
  const deleteTaskRepository = new DeleteTaskRepository()
  return new DeleteTaskUseCase(deleteTaskRepository)
}
