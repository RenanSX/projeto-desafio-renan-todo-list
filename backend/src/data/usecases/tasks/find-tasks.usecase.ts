import { IFindTaskRepository } from '@/data/protocols/database/tasks'
import { MESSAGES } from '@/domain/entities'
import { IFindTasks } from '@/domain/usecases/tasks'

export class FindTaskUsecase implements IFindTasks {
  constructor(private readonly findTaskRepository: IFindTaskRepository) {}

  async findTask(id: string): Promise<IFindTasks.Result> {
    const findresult = await this.findTaskRepository.find(id)
    return findresult || MESSAGES.TaskNotFound(id)
  }
}
