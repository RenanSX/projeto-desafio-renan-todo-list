export namespace IDeleteTaskRepository {
  export type Params = {
    id: string
  }

  export type Result = string | number
}

export interface IDeleteTaskRepository {
  delete(id: string): Promise<IDeleteTaskRepository.Result>
}
