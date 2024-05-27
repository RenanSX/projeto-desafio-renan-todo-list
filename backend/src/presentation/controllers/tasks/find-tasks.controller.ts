import { MESSAGES } from '@/domain/entities'
import { IFindTasks } from '@/domain/usecases/tasks'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class FindTaskController implements Controller {
  constructor(private readonly findTaskUsecase: IFindTasks) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IFindTasks.Params
      const result = await this.findTaskUsecase.findTask(id)

      if (result === MESSAGES.taskNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
