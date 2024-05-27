import Task from '@/data/entity/task.entity'
import { IFindTaskRepository } from '@/data/protocols/database/tasks'

export class FindTaskRepository implements IFindTaskRepository {
  async find(id: string): Promise<IFindTaskRepository.Result> {
    const task = await Task.findOne({
      where: { uuid: id },
      attributes: ['uuid', 'title', 'description', 'completed', 'editing']
    })
    return task
  }
}
