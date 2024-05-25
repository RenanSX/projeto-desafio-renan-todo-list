import { TaskOutput } from '@/data/entity/task.entity'

export namespace IFindTaskRepository {
  export type Params = {
    id: string
  }

  export type Result = TaskOutput
}

export interface IFindTaskRepository {
  find(id: string): Promise<IFindTaskRepository.Result>
}
