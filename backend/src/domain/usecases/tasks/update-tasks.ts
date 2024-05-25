import { TaskInput, TaskOutput } from '@/data/entity/task.entity'

export namespace IUpdateTask {
  export type Params = { id: string } & TaskInput

  export type Result = string | TaskOutput
}

export interface IUpdateTask {
  updateTask(params: IUpdateTask.Params): Promise<IUpdateTask.Result>
}
