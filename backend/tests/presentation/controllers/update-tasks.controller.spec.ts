import { IUpdateTask } from '@/domain/usecases/tasks'
import { UpdateTaskController } from '@/presentation/controllers/tasks'
import { ok, serverError, notFound } from '@/presentation/helpers'

const request = {
  params: {
    id: 'test_id'
  },
  body: {
    title: 'Test Task',
    description: 'Test Description',
    completed: true
  }
} as any

jest.mock('@/domain/usecases/tasks', () => ({
  updateTask: jest.fn().mockResolvedValue({
    uuid: 'test_id',
    title: 'Test Task',
    description: 'Test Description',
    completed: true
  })
}))

describe('UpdateTaskController', () => {
  let updateTaskController: UpdateTaskController
  let updateTaskUsecase: jest.Mocked<IUpdateTask>

  beforeEach(() => {
    updateTaskUsecase = {
      updateTask: jest.fn().mockResolvedValue({
        id: 'test_id',
        title: 'Test Task',
        description: 'Test Description',
        completed: true
      })
    }
    updateTaskController = new UpdateTaskController(updateTaskUsecase)
  })

  it('should call IUpdateTask.updateTask with correct values', async () => {
    await updateTaskController.handle(request)

    expect(updateTaskUsecase.updateTask).toHaveBeenCalledWith({
      id: 'test_id',
      title: 'Test Task',
      description: 'Test Description',
      completed: true
    })
  })

  it('should return 200 if the task is updated successfully', async () => {
    const httpResponse = await updateTaskController.handle(request)

    expect(httpResponse).toEqual(
      ok({
        id: 'test_id',
        title: 'Test Task',
        description: 'Test Description',
        completed: true
      })
    )
  })

  it('should return 404 if the task is not found', async () => {
    jest.spyOn(updateTaskUsecase, 'updateTask').mockResolvedValueOnce('Task with id test_id not found')

    const httpResponse = await updateTaskController.handle(request)

    expect(httpResponse).toEqual(notFound('Task with id test_id not found'))
  })

  it('should return 500 if IUpdateTask.updateTask throws', async () => {
    jest.spyOn(updateTaskUsecase, 'updateTask').mockRejectedValueOnce(new Error())

    const httpResponse = await updateTaskController.handle(request)

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
