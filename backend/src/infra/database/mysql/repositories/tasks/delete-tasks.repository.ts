import Task from '@/data/entity/task.entity'
import { IDeleteTaskRepository } from '@/data/protocols/database/tasks'

export class DeleteTaskRepository implements IDeleteTaskRepository {
  async delete(id: string): Promise<IDeleteTaskRepository.Result> {
    const taskDeleted = await Task.destroy({
      where: { uuid: id }
    })
    return taskDeleted
  }
}
