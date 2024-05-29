import { ICreateTaskRepository } from '@/data/protocols/database/tasks'
import Task from '@/infra/database/mysql/entity/task.entity'

export class CreateTaskRepository implements ICreateTaskRepository {
  async create(payload: ICreateTaskRepository.Params): Promise<ICreateTaskRepository.Result> {
    const task = await Task.create(payload)
    return task.dataValues
  }
}
