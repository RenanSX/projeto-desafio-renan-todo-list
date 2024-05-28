import Task from '@/data/entity/task.entity'
import { CreateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

jest.mock('@/data/entity/task.entity', () => ({
  create: jest.fn().mockResolvedValue({
    dataValues: {
      uuid: 'test_uuid'
    }
  })
}))

describe('CreateTaskRepository', () => {
  let createTaskRepository: CreateTaskRepository

  beforeEach(() => {
    createTaskRepository = new CreateTaskRepository()
  })

  it('should call Task.create with correct values', async () => {
    const payload = {
      title: 'Test Task',
      description: 'Test Description',
      date: new Date()
    }

    await createTaskRepository.create(payload)

    expect(Task.create).toHaveBeenCalledWith(payload)
  })

  it('should return the uuid of the created task', async () => {
    const payload = {
      title: 'Test Task',
      description: 'Test Description',
      date: new Date()
    }

    const result = await createTaskRepository.create(payload)

    expect(result).toEqual({ uuid: 'test_uuid' })
  })

  it('should throw if Task.create throws', async () => {
    const payload = {
      title: 'Test Task',
      description: 'Test Description',
      date: new Date()
    }
    jest.spyOn(Task, 'create').mockRejectedValueOnce(new Error())

    await expect(createTaskRepository.create(payload)).rejects.toThrow()
  })
})
