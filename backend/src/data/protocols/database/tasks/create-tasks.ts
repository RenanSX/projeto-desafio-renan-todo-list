import { TaskInput, TaskOutput } from '@/data/entity/task.entity'

export namespace ICreateTaskRepository {
  export type Params = TaskInput

  export type Result = TaskOutput
}

export interface ICreateTaskRepository {
  create(params: ICreateTaskRepository.Params): Promise<ICreateTaskRepository.Result>
}
