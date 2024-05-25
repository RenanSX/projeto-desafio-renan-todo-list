import { IUpdateTaskRepository } from '@/data/protocols/database/tasks'
import { MESSAGES } from '@/domain/entities'
import { IUpdateTask } from '@/domain/usecases/tasks'

export class UpdateTaskUsecase implements IUpdateTask {
  constructor(private readonly updateTaskRepository: IUpdateTaskRepository) {}

  async updateTask(data: IUpdateTask.Params): Promise<IUpdateTask.Result> {
    const updateResult = await this.updateTaskRepository.update(data)
    return updateResult || MESSAGES.TaskNotFound(data.id)
  }
}
