import { IFindTasks } from '@/domain/usecases/tasks'
import { FindTaskController } from '@/presentation/controllers/tasks/'
import { ok, serverError, notFound } from '@/presentation/helpers'

const request = {
  params: {
    id: 'test_id'
  }
} as any

jest.mock('@/domain/usecases/tasks', () => ({
  findTask: jest.fn().mockResolvedValue({
    id: 'test_id',
    title: 'Test Task',
    description: 'Test Description',
    completed: false
  })
}))

describe('FindTaskController', () => {
  let findTaskController: FindTaskController
  let findTaskUsecase: jest.Mocked<IFindTasks>

  beforeEach(() => {
    findTaskUsecase = {
      findTask: jest.fn().mockResolvedValue({
        id: 'test_id',
        title: 'Test Task',
        description: 'Test Description',
        completed: false
      })
    }
    findTaskController = new FindTaskController(findTaskUsecase)
  })

  it('should call IFindTask.findTask with correct values', async () => {
    await findTaskController.handle(request)

    expect(findTaskUsecase.findTask).toHaveBeenCalledWith(request.params.id)
  })

  it('should return 200 and the task if the task is found', async () => {
    const httpResponse = await findTaskController.handle(request)

    expect(httpResponse).toEqual(
      ok({
        id: 'test_id',
        title: 'Test Task',
        description: 'Test Description',
        completed: false
      })
    )
  })

  it('should return 404 if the task is not found', async () => {
    jest.spyOn(findTaskUsecase, 'findTask').mockResolvedValueOnce('Task with id test_id not found')

    const httpResponse = await findTaskController.handle(request)

    expect(httpResponse).toEqual(notFound('Task with id test_id not found'))
  })

  it('should return 500 if IFindTask.findTask throws', async () => {
    jest.spyOn(findTaskUsecase, 'findTask').mockRejectedValueOnce(new Error())

    const httpResponse = await findTaskController.handle(request)

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
