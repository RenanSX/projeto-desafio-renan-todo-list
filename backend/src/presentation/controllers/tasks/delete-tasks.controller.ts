import { MESSAGES } from '@/domain/entities'
import { IDeleteTask } from '@/domain/usecases/tasks'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class DeleteTaskController implements Controller {
  constructor(private readonly deleteTaskUsecase: IDeleteTask) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IDeleteTask.Params
      const result = await this.deleteTaskUsecase.deleteTask(id)

      if (result === MESSAGES.taskNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
