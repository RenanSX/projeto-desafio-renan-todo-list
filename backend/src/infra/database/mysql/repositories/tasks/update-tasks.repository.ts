import Task from '@/data/entity/task.entity'
import { IUpdateTaskRepository } from '@/data/protocols/database/tasks'

export class UpdateTaskRepository implements IUpdateTaskRepository {
  async update(params: IUpdateTaskRepository.Params): Promise<IUpdateTaskRepository.Result> {
    const { id, ...dataWithoutId } = params
    const task = await Task.findOne({ where: { uuid: id } })
    if (task === null) {
      return task
    }
    const taskUpdate = await task.update(dataWithoutId)
    return taskUpdate.dataValues
  }
}
