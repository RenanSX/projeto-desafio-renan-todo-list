import { MESSAGES } from '@/domain/entities'
import { IUpdateTask } from '@/domain/usecases/tasks'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class CompleteTaskController implements Controller {
  constructor(private readonly updateTaskUsecase: IUpdateTask) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IUpdateTask.Params
      const updateData = request.body as IUpdateTask.Params
      const result = await this.updateTaskUsecase.updateTask({ id, ...updateData })

      if (result === MESSAGES.TaskNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
