import { IDeleteTaskRepository } from '@/data/protocols/database/tasks'
import { MESSAGES } from '@/domain/entities'
import { IDeleteTask } from '@/domain/usecases/tasks'

export class DeleteTaskUsecase implements IDeleteTask {
  constructor(private readonly deleteTaskRepository: IDeleteTaskRepository) {}

  async deleteTask(id: string): Promise<IDeleteTask.Result> {
    const deleteResult = await this.deleteTaskRepository.delete(id)
    return deleteResult ? MESSAGES.deleteTaskSuccess(id) : MESSAGES.TaskNotFound(id)
  }
}
