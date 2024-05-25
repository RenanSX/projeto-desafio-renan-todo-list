import { ICreateTask } from '@/domain/usecases/tasks'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class CreateTaskController implements Controller {
  constructor(private readonly createTaskUsecase: ICreateTask) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { title, description } = request.body as ICreateTask.Params
      const data = { title, description }

      const result = await this.createTaskUsecase.createTask(data)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
