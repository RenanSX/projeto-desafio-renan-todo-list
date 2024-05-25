import { UpdateTaskUsecase } from '@/data/usecases/tasks'
import { UpdateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeCompleteTaskUsecase = (): UpdateTaskUsecase => {
  const updateTaskRepository = new UpdateTaskRepository()
  return new UpdateTaskUsecase(updateTaskRepository)
}
