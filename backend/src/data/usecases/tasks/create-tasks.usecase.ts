import { ICreateTaskRepository } from '@/data/protocols/database/tasks'
import { ICreateTask } from '@/domain/usecases/tasks'

export class CreateTaskUseCase implements ICreateTask {
  constructor(private readonly createTaskRepository: ICreateTaskRepository) {}

  async createTask(data: ICreateTask.Params): Promise<ICreateTask.Result> {
    const task = await this.createTaskRepository.create(data)
    return task
  }
}
