import { ICreateTask } from '@/domain/usecases/tasks'
import { CreateTaskController } from '@/presentation/controllers/tasks/'
import { ok, serverError } from '@/presentation/helpers'

const request = {
  body: {
    title: 'Test Task',
    description: 'Test Description'
  }
} as any

jest.mock('@/domain/usecases/tasks', () => ({
  createTask: jest.fn().mockResolvedValue('test_uuid')
}))

describe('CreateTaskController', () => {
  let createTaskController: CreateTaskController
  let createTaskUsecase: jest.Mocked<ICreateTask>

  beforeEach(() => {
    createTaskUsecase = {
      createTask: jest.fn().mockResolvedValue('test_uuid')
    }
    createTaskController = new CreateTaskController(createTaskUsecase)
  })

  it('should call ICreateTask.createTask with correct values', async () => {
    await createTaskController.handle(request)

    expect(createTaskUsecase.createTask).toHaveBeenCalledWith(request.body)
  })

  it('should return 200 and the uuid of the created task', async () => {
    const httpResponse = await createTaskController.handle(request)

    expect(httpResponse).toEqual(ok('test_uuid'))
  })

  it('should return 500 if ICreateTask.createTask throws', async () => {
    jest.spyOn(createTaskUsecase, 'createTask').mockRejectedValueOnce(new Error())

    const httpResponse = await createTaskController.handle(request)

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
