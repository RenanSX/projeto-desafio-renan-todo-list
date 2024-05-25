import { IDeleteTaskRepository } from '@/data/protocols/database/tasks'
import Task from '@/data/entity/task.entity'

export class DeleteTaskRepository implements IDeleteTaskRepository {
  async delete(id: string): Promise<IDeleteTaskRepository.Result> {
    const taskDeleted = await Task.destroy({
      where: { uuid: id }
    })
    return taskDeleted
  }
}
