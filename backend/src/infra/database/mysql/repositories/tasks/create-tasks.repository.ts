import Task from '@/data/entity/task.entity'
import { ICreateTaskRepository } from '@/data/protocols/database/tasks'

export class CreateTaskRepository implements ICreateTaskRepository {
  async create(payload: ICreateTaskRepository.Params): Promise<ICreateTaskRepository.Result> {
    const task = await Task.create(payload)
    return task.dataValues
  }
}
