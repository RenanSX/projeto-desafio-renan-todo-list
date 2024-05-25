import { IListTasks } from '@/domain/usecases/tasks'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListTasksController implements Controller {
  constructor(private readonly listTasksUsecase: IListTasks) {}

  public async handle(): Promise<HttpResponse> {
    try {
      const result = await this.listTasksUsecase.listTasks()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
