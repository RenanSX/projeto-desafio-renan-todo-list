import { TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace IListTasksRepository {
  export type Result = Array<TaskOutput>
}

export interface IListTasksRepository {
  list(): Promise<IListTasksRepository.Result>
}
