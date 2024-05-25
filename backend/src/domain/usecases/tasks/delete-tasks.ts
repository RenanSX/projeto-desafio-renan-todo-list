export namespace IDeleteTask {
  export type Params = {
    id: string
  }

  export type Result = string | number
}

export interface IDeleteTask {
  deleteTask(id: string): Promise<IDeleteTask.Result>
}
