import { IUpdateTaskRepository } from '@/data/protocols/database/tasks'
import { MESSAGES } from '@/domain/entities'
import { IUpdateTask } from '@/domain/usecases/tasks'

export class UpdateTaskUseCase implements IUpdateTask {
  constructor(private readonly updateTaskRepository: IUpdateTaskRepository) {}

  async updateTask(data: IUpdateTask.Params): Promise<IUpdateTask.Result> {
    const updateResult = await this.updateTaskRepository.update(data)
    return updateResult || MESSAGES.taskNotFound(data.id)
  }
}
