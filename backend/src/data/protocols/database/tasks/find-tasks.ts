import { TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace IFindTaskRepository {
  export type Params = {
    id: string
  }

  export type Result = TaskOutput
}

export interface IFindTaskRepository {
  find(id: string): Promise<IFindTaskRepository.Result>
}
