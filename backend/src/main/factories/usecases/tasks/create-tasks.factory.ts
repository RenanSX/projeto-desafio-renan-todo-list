import { CreateTaskUseCase } from '@/data/usecases/tasks'
import { CreateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

export const makeCreateTaskUsecase = (): CreateTaskUseCase => {
  const createTaskRepository = new CreateTaskRepository()
  return new CreateTaskUseCase(createTaskRepository)
}
