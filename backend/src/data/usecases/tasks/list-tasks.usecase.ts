import { IListTasksRepository } from '@/data/protocols/database/tasks'
import { IListTasks } from '@/domain/usecases/tasks'

export class ListTasksUseCase implements IListTasks {
  constructor(private readonly listTasksRepository: IListTasksRepository) {}

  async listTasks(): Promise<IListTasks.Result> {
    return this.listTasksRepository.list()
  }
}
