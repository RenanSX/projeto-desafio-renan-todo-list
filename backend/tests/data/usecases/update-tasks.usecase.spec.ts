import { IUpdateTaskRepository } from '@/data/protocols/database/tasks'
import { UpdateTaskUseCase } from '@/data/usecases/tasks'
import { MESSAGES } from '@/domain/entities'

const taskData = {
  id: 111,
  title: 'Test Task',
  description: 'Test Description'
} as any

describe('UpdateTaskUseCase', () => {
  let updateTaskRepository: IUpdateTaskRepository
  let updateTaskUseCase: UpdateTaskUseCase

  beforeEach(() => {
    updateTaskRepository = {
      update: jest.fn().mockResolvedValue(true)
    }
    updateTaskUseCase = new UpdateTaskUseCase(updateTaskRepository)
  })

  it('should call UpdateTaskRepository with correct values', async () => {
    await updateTaskUseCase.updateTask(taskData)

    expect(updateTaskRepository.update).toHaveBeenCalledWith(taskData)
  })

  it('should return a not found message if task is not found', async () => {
    jest.spyOn(updateTaskRepository, 'update').mockResolvedValueOnce(null)

    const result = await updateTaskUseCase.updateTask(taskData)

    expect(result).toEqual(MESSAGES.taskNotFound(taskData.id))
  })

  it('should throw if UpdateTaskRepository throws', async () => {
    jest.spyOn(updateTaskRepository, 'update').mockRejectedValueOnce(new Error())

    await expect(updateTaskUseCase.updateTask(taskData)).rejects.toThrow()
  })
})
