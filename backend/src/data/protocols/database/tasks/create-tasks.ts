import { TaskInput } from '@/data/entity/task.entity'

export namespace ICreateTaskRepository {
  export type Params = TaskInput

  export type Result = string | null
}

export interface ICreateTaskRepository {
  create(params: ICreateTaskRepository.Params): Promise<ICreateTaskRepository.Result>
}
