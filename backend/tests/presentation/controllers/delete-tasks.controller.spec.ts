import { IDeleteTask } from '@/domain/usecases/tasks'
import { DeleteTaskController } from '@/presentation/controllers/tasks'
import { ok, serverError, notFound } from '@/presentation/helpers'

const request = {
  params: {
    id: 'test_id'
  }
} as any

jest.mock('@/domain/usecases/tasks', () => ({
  deleteTask: jest.fn().mockResolvedValue(true)
}))

describe('DeleteTaskController', () => {
  let deleteTaskController: DeleteTaskController
  let deleteTaskUsecase: jest.Mocked<IDeleteTask>

  beforeEach(() => {
    deleteTaskUsecase = {
      deleteTask: jest.fn().mockResolvedValue({ message: 'Task test_id deleted with success' })
    }
    deleteTaskController = new DeleteTaskController(deleteTaskUsecase)
  })

  it('should call IDeleteTask.deleteTask with correct values', async () => {
    await deleteTaskController.handle(request)

    expect(deleteTaskUsecase.deleteTask).toHaveBeenCalledWith(request.params.id)
  })

  it('should return 200 if the task is deleted successfully', async () => {
    const httpResponse = await deleteTaskController.handle(request)

    expect(httpResponse).toEqual(ok({ message: 'Task test_id deleted with success' }))
  })

  it('should return 404 if the task is not found', async () => {
    jest.spyOn(deleteTaskUsecase, 'deleteTask').mockResolvedValueOnce('Task with id test_id not found')

    const httpResponse = await deleteTaskController.handle(request)

    expect(httpResponse).toEqual(notFound('Task with id test_id not found'))
  })

  it('should return 500 if IDeleteTask.deleteTask throws', async () => {
    jest.spyOn(deleteTaskUsecase, 'deleteTask').mockRejectedValueOnce(new Error())

    const httpResponse = await deleteTaskController.handle(request)

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
