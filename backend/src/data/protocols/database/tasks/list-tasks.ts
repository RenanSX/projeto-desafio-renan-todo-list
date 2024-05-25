import { TaskOutput } from '@/data/entity/task.entity'

export namespace IListTasksRepository {
  export type Result = Array<TaskOutput>
}

export interface IListTasksRepository {
  list(): Promise<IListTasksRepository.Result>
}
