import { UpdateTaskUseCase } from '@/data/usecases/tasks'
import { UpdateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeCompleteTaskUsecase = (): UpdateTaskUseCase => {
  const updateTaskRepository = new UpdateTaskRepository()
  return new UpdateTaskUseCase(updateTaskRepository)
}
