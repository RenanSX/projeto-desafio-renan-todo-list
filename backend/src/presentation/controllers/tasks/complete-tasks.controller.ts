import { MESSAGES } from '@/domain/entities'
import { ICompleteTask } from '@/domain/usecases/tasks'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class CompleteTaskController implements Controller {
  constructor(private readonly updateTaskUsecase: ICompleteTask) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as ICompleteTask.Params
      const updateData = request.body as ICompleteTask.Params
      const result = await this.updateTaskUsecase.completeTask({ id, ...updateData })

      if (result === MESSAGES.taskNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
