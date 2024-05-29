import { TaskCompleteInput, TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace ICompleteTask {
  export type Params = { id: string } & TaskCompleteInput

  export type Result = string | TaskOutput
}

export interface ICompleteTask {
  completeTask(params: ICompleteTask.Params): Promise<ICompleteTask.Result>
}
