import Task from '@/data/entity/task.entity'
import { UpdateTaskRepository } from '@/infra/database/mysql/repositories/tasks'

const params = {
  id: 'test_uuid',
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  editing: false
} as any

jest.mock('@/data/entity/task.entity', () => ({
  findOne: jest.fn().mockResolvedValue({
    update: jest.fn().mockResolvedValue({
      dataValues: {
        uuid: 'test_uuid',
        title: 'Test Task',
        description: 'Test Description',
        completed: false,
        editing: false
      }
    })
  })
}))

describe('UpdateTaskRepository', () => {
  let updateTaskRepository: UpdateTaskRepository

  beforeEach(() => {
    updateTaskRepository = new UpdateTaskRepository()
  })

  it('should call Task.findOne with correct id', async () => {
    await updateTaskRepository.update(params)

    expect(Task.findOne).toHaveBeenCalledWith({ where: { uuid: params.id } })
  })

  it('should call task.update with correct values', async () => {
    const task = await Task.findOne({ where: { uuid: params.id } })

    await updateTaskRepository.update(params)

    expect(task.update).toHaveBeenCalledWith({
      title: params.title,
      description: params.description,
      completed: params.completed,
      editing: params.editing
    })
  })

  it('should return the updated task', async () => {
    const result = await updateTaskRepository.update(params)

    expect(result).toEqual({
      uuid: 'test_uuid',
      title: undefined,
      description: 'Test Description',
      completed: false,
      editing: false
    })
  })

  it('should throw if Task.findOne throws', async () => {
    jest.spyOn(Task, 'findOne').mockRejectedValueOnce(new Error())

    await expect(updateTaskRepository.update(params)).rejects.toThrow()
  })

  it('should throw if task.update throws', async () => {
    const task = await Task.findOne({ where: { uuid: params.id } })
    jest.spyOn(task, 'update').mockRejectedValueOnce(new Error())

    await expect(updateTaskRepository.update(params)).rejects.toThrow()
  })
})
