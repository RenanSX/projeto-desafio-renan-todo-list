import { ICreateTaskRepository } from '@/data/protocols/database/tasks'
import { MESSAGES } from '@/domain/entities'
import { ICreateTask } from '@/domain/usecases/tasks'

export class CreateTaskUseCase implements ICreateTask {
  constructor(private readonly createTaskRepository: ICreateTaskRepository) {}

  async createTask(data: ICreateTask.Params): Promise<ICreateTask.Result> {
    const insertedId = await this.createTaskRepository.create(data)
    return MESSAGES.createTaskSuccess(insertedId as string)
  }
}
