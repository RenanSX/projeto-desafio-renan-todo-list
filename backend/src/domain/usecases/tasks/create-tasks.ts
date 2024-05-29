import { TaskInput, TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace ICreateTask {
  export type Params = TaskInput

  export type Result = TaskOutput
}

export interface ICreateTask {
  createTask(params: ICreateTask.Params): Promise<ICreateTask.Result>
}
