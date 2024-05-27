import Task from '@/data/entity/task.entity'
import { IUpdateTaskRepository } from '@/data/protocols/database/tasks'

export class UpdateTaskRepository implements IUpdateTaskRepository {
  async update(params: IUpdateTaskRepository.Params): Promise<IUpdateTaskRepository.Result> {
    const { id, ...dataWithoutId } = params
    const task = await Task.findOne({ where: { uuid: id } })
    const taskUpdate = await task.update(dataWithoutId)
    return {
      uuid: taskUpdate.dataValues.uuid,
      title: taskUpdate.title,
      description: taskUpdate.dataValues.description,
      completed: taskUpdate.dataValues.completed,
      editing: taskUpdate.dataValues.editing
    }
  }
}
