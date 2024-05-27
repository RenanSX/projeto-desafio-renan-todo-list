import Task from '@/data/entity/task.entity'
import { UpdateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

const params = {
  id: 'test_id',
  title: 'Test Task',
  description: 'Test Description',
  completed: true,
  editing: false
} as any

jest.mock('@/data/entity/task.entity', () => ({
  findOne: jest.fn().mockResolvedValue({
    update: jest.fn().mockResolvedValue({
      dataValues: {
        uuid: 'test_id',
        title: 'Test Task',
        description: 'Test Description',
        completed: true,
        editing: false
      }
    })
  })
}))

describe('UpdateTaskRepository', () => {
  let updateTaskRepository: UpdateTaskRepository
  let taskEntity: jest.Mocked<typeof Task>

  beforeEach(() => {
    taskEntity = Task as jest.Mocked<typeof Task>
    updateTaskRepository = new UpdateTaskRepository()
  })

  it('should call Task.findOne with correct values', async () => {
    await updateTaskRepository.update(params)

    expect(taskEntity.findOne).toHaveBeenCalledWith({ where: { uuid: params.id } })
  })

  it('should return null if the task is not found', async () => {
    jest.spyOn(taskEntity, 'findOne').mockResolvedValueOnce(null)

    const task = await updateTaskRepository.update(params)

    expect(task).toBeNull()
  })

  it('should return the updated task if the task is found', async () => {
    const task = await updateTaskRepository.update(params)

    expect(task).toEqual({
      uuid: 'test_id',
      title: 'Test Task',
      description: 'Test Description',
      completed: true,
      editing: false
    })
  })
})
