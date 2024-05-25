import { TaskOutput } from '@/data/entity/task.entity'

export namespace IListTasks {
  export type Result = Array<TaskOutput>
}

export interface IListTasks {
  listTasks(): Promise<IListTasks.Result>
}
