import { TaskOutput } from '@/infra/database/mysql/entity/task.entity'

export namespace IFindTasks {
  export type Params = {
    id: string
  }

  export type Result = string | TaskOutput
}

export interface IFindTasks {
  findTask(id: string): Promise<IFindTasks.Result>
}
