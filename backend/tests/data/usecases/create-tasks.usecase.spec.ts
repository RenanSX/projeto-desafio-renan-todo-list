import { ICreateTaskRepository } from '@/data/protocols/database/tasks'
import { CreateTaskUseCase } from '@/data/usecases/tasks'
import { MESSAGES } from '@/domain/entities'
import { ICreateTask } from '@/domain/usecases/tasks'

describe('CreateTaskUseCase', () => {
  let createTaskRepository: ICreateTaskRepository
  let createTaskUseCase: CreateTaskUseCase

  beforeEach(() => {
    createTaskRepository = {
      create: jest.fn().mockResolvedValue('mocked_id')
    }
    createTaskUseCase = new CreateTaskUseCase(createTaskRepository)
  })

  it('should call CreateTaskRepository with correct values', async () => {
    const taskData: ICreateTask.Params = {
      title: 'Test Task',
      description: 'Test Description'
    }

    await createTaskUseCase.createTask(taskData)

    expect(createTaskRepository.create).toHaveBeenCalledWith(taskData)
  })

  it('should return a success message on successful task creation', async () => {
    const taskData: ICreateTask.Params = {
      title: 'Test Task',
      description: 'Test Description'
    }

    const result = await createTaskUseCase.createTask(taskData)

    expect(result).toEqual(MESSAGES.createTaskSuccess('mocked_id'))
  })

  it('should throw if CreateTaskRepository throws', async () => {
    const taskData: ICreateTask.Params = {
      title: 'Test Task',
      description: 'Test Description'
    }

    jest.spyOn(createTaskRepository, 'create').mockRejectedValueOnce(new Error())

    await expect(createTaskUseCase.createTask(taskData)).rejects.toThrow()
  })
})
