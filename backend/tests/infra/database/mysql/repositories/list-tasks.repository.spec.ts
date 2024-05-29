import Task from '@/infra/database/mysql/entity/task.entity'
import { ListTasksRepository } from '@/infra/database/mysql/repositories/tasks'

jest.mock('@/infra/database/mysql/entity/task.entity', () => ({
  findAll: jest.fn().mockResolvedValue([
    {
      uuid: 'test_uuid1',
      title: 'Test Task 1',
      description: 'Test Description 1',
      completed: false,
      editing: false
    },
    {
      uuid: 'test_uuid2',
      title: 'Test Task 2',
      description: 'Test Description 2',
      completed: true,
      editing: false
    }
  ])
}))

describe('ListTasksRepository', () => {
  let listTasksRepository: ListTasksRepository

  beforeEach(() => {
    listTasksRepository = new ListTasksRepository()
  })

  it('should call Task.findAll', async () => {
    await listTasksRepository.list()

    expect(Task.findAll).toHaveBeenCalled()
  })

  it('should return a list of tasks', async () => {
    const result = await listTasksRepository.list()

    expect(result).toEqual([
      {
        uuid: 'test_uuid1',
        title: 'Test Task 1',
        description: 'Test Description 1',
        completed: false,
        editing: false
      },
      {
        uuid: 'test_uuid2',
        title: 'Test Task 2',
        description: 'Test Description 2',
        completed: true,
        editing: false
      }
    ])
  })

  it('should throw if Task.findAll throws', async () => {
    jest.spyOn(Task, 'findAll').mockRejectedValueOnce(new Error())

    await expect(listTasksRepository.list()).rejects.toThrow()
  })
})
