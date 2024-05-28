import { ICompleteTask } from '@/domain/usecases/tasks'
import { CompleteTaskController } from '@/presentation/controllers/tasks'
import { ok, serverError, notFound } from '@/presentation/helpers'

const request = {
  params: {
    id: 'test_id'
  }
} as any

jest.mock('@/domain/usecases/tasks', () => ({
  completeTask: jest.fn().mockResolvedValue({
    uuid: 'teste_id',
    title: 'Title task',
    description: 'Description task',
    completed: false
  })
}))

describe('CompleteTaskController', () => {
  let completeTaskController: CompleteTaskController
  let completeTaskUsecase: jest.Mocked<ICompleteTask>

  beforeEach(() => {
    completeTaskUsecase = {
      completeTask: jest.fn().mockResolvedValue({
        uuid: 'teste_id',
        title: 'Title task',
        description: 'Description task',
        completed: false
      })
    }
    completeTaskController = new CompleteTaskController(completeTaskUsecase)
  })

  it('should call ICompleteTask.completeTask with correct values', async () => {
    await completeTaskController.handle(request)

    expect(completeTaskUsecase.completeTask).toHaveBeenCalledWith({ id: request.params.id })
  })

  it('should return 200 if the task is completed successfully', async () => {
    const httpResponse = await completeTaskController.handle(request)

    expect(httpResponse).toEqual(
      ok({
        uuid: 'teste_id',
        title: 'Title task',
        description: 'Description task',
        completed: false
      })
    )
  })

  it('should return 404 if the task is not found', async () => {
    jest.spyOn(completeTaskUsecase, 'completeTask').mockResolvedValueOnce('Task with id test_id not found')

    const httpResponse = await completeTaskController.handle(request)

    expect(httpResponse).toEqual(notFound('Task with id test_id not found'))
  })

  it('should return 500 if ICompleteTask.completeTask throws', async () => {
    jest.spyOn(completeTaskUsecase, 'completeTask').mockRejectedValueOnce(new Error())

    const httpResponse = await completeTaskController.handle(request)

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
