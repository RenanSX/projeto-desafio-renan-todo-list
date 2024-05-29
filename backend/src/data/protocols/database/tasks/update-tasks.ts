import { TaskInput, TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace IUpdateTaskRepository {
  export type Params = { id: string } & TaskInput

  export type Result = TaskOutput
}

export interface IUpdateTaskRepository {
  update(params: IUpdateTaskRepository.Params): Promise<IUpdateTaskRepository.Result>
}
