import Task from '@/data/entity/task.entity'
import { IListTasksRepository } from '@/data/protocols/database/tasks'

export class ListTasksRepository implements IListTasksRepository {
  async list(): Promise<IListTasksRepository.Result> {
    return Task.findAll()
  }
}
