import { IListTasks } from '@/domain/usecases/tasks'
import { ListTasksController } from '@/presentation/controllers/tasks/'
import { ok, serverError } from '@/presentation/helpers'

jest.mock('@/domain/usecases/tasks', () => ({
  listTasks: jest.fn().mockResolvedValue([
    {
      id: 'test_id',
      title: 'Test Task',
      description: 'Test Description',
      completed: false
    }
  ])
}))

describe('ListTasksController', () => {
  let listTasksController: ListTasksController
  let listTasksUsecase: jest.Mocked<IListTasks>

  beforeEach(() => {
    listTasksUsecase = {
      listTasks: jest.fn().mockResolvedValue([
        {
          id: 'test_id',
          title: 'Test Task',
          description: 'Test Description',
          completed: false
        }
      ])
    }
    listTasksController = new ListTasksController(listTasksUsecase)
  })

  it('should call IListTasks.listTasks', async () => {
    await listTasksController.handle()

    expect(listTasksUsecase.listTasks).toHaveBeenCalled()
  })

  it('should return 200 and the list of tasks', async () => {
    const httpResponse = await listTasksController.handle()

    expect(httpResponse).toEqual(
      ok([
        {
          id: 'test_id',
          title: 'Test Task',
          description: 'Test Description',
          completed: false
        }
      ])
    )
  })

  it('should return 500 if IListTasks.listTasks throws', async () => {
    jest.spyOn(listTasksUsecase, 'listTasks').mockRejectedValueOnce(new Error())

    const httpResponse = await listTasksController.handle()

    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
