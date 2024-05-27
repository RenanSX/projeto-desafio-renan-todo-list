import { IListTasksRepository } from '@/data/protocols/database/tasks'
import { ListTasksUseCase } from '@/data/usecases/tasks'

describe('ListTasksUseCase', () => {
  let listTasksRepository: IListTasksRepository
  let listTasksUseCase: ListTasksUseCase

  beforeEach(() => {
    listTasksRepository = {
      list: jest.fn().mockResolvedValue([{ id: 'test_id', title: 'Test Task', description: 'Test Description' }])
    }
    listTasksUseCase = new ListTasksUseCase(listTasksRepository)
  })

  it('should call ListTasksRepository', async () => {
    await listTasksUseCase.listTasks()

    expect(listTasksRepository.list).toHaveBeenCalled()
  })

  it('should return a list of tasks', async () => {
    const result = await listTasksUseCase.listTasks()

    expect(result).toEqual([{ id: 'test_id', title: 'Test Task', description: 'Test Description' }])
  })

  it('should throw if ListTasksRepository throws', async () => {
    jest.spyOn(listTasksRepository, 'list').mockRejectedValueOnce(new Error())

    await expect(listTasksUseCase.listTasks()).rejects.toThrow()
  })
})
