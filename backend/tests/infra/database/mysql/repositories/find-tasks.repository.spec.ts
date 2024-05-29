import Task from '@/infra/database/mysql/entity/task.entity'
import { FindTaskRepository } from '@/infra/database/mysql/repositories/tasks'

jest.mock('@/infra/database/mysql/entity/task.entity', () => ({
  findOne: jest.fn().mockResolvedValue({
    uuid: 'test_uuid',
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    editing: false
  })
}))

describe('FindTaskRepository', () => {
  let findTaskRepository: FindTaskRepository

  beforeEach(() => {
    findTaskRepository = new FindTaskRepository()
  })

  it('should call Task.findOne with correct id', async () => {
    const id = 'test_id'

    await findTaskRepository.find(id)

    expect(Task.findOne).toHaveBeenCalledWith({
      where: { uuid: id },
      attributes: ['uuid', 'title', 'description', 'completed', 'editing']
    })
  })

  it('should return the task if it is found', async () => {
    const id = 'test_id'

    const result = await findTaskRepository.find(id)

    expect(result).toEqual({
      uuid: 'test_uuid',
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
      editing: false
    })
  })

  it('should return null if the task is not found', async () => {
    const id = 'test_id'
    jest.spyOn(Task, 'findOne').mockResolvedValueOnce(null)

    const result = await findTaskRepository.find(id)

    expect(result).toBeNull()
  })

  it('should throw if Task.findOne throws', async () => {
    const id = 'test_id'
    jest.spyOn(Task, 'findOne').mockRejectedValueOnce(new Error())

    await expect(findTaskRepository.find(id)).rejects.toThrow()
  })
})
