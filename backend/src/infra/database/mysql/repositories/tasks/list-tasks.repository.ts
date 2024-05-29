import { IListTasksRepository } from '@/data/protocols/database/tasks'
import Task from '@/infra/database/mysql/entity/task.entity'

export class ListTasksRepository implements IListTasksRepository {
  async list(): Promise<IListTasksRepository.Result> {
    return Task.findAll()
  }
}
