import { DeleteTaskUsecase } from '@/data/usecases/tasks'
import { DeleteTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeDeleteTaskUsecase = (): DeleteTaskUsecase => {
  const deleteTaskRepository = new DeleteTaskRepository()
  return new DeleteTaskUsecase(deleteTaskRepository)
}
