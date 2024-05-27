import { IDeleteTaskRepository } from '@/data/protocols/database/tasks'
import { DeleteTaskUseCase } from '@/data/usecases/tasks'
import { MESSAGES } from '@/domain/entities'

describe('DeleteTaskUseCase', () => {
  let deleteTaskRepository: IDeleteTaskRepository
  let deleteTaskUseCase: DeleteTaskUseCase

  beforeEach(() => {
    deleteTaskRepository = {
      delete: jest.fn().mockResolvedValue(true)
    }
    deleteTaskUseCase = new DeleteTaskUseCase(deleteTaskRepository)
  })

  it('should call DeleteTaskRepository with correct id', async () => {
    const id = 'test_id'

    await deleteTaskUseCase.deleteTask(id)

    expect(deleteTaskRepository.delete).toHaveBeenCalledWith(id)
  })

  it('should return a success message if task is deleted successfully', async () => {
    const id = 'test_id'

    const result = await deleteTaskUseCase.deleteTask(id)

    expect(result).toEqual(MESSAGES.deleteTaskSuccess(id))
  })

  it('should return a not found message if task is not found', async () => {
    const id = 'test_id'
    jest.spyOn(deleteTaskRepository, 'delete').mockResolvedValueOnce(0)

    const result = await deleteTaskUseCase.deleteTask(id)

    expect(result).toEqual(MESSAGES.taskNotFound(id))
  })

  it('should throw if DeleteTaskRepository throws', async () => {
    const id = 'test_id'
    jest.spyOn(deleteTaskRepository, 'delete').mockRejectedValueOnce(new Error())

    await expect(deleteTaskUseCase.deleteTask(id)).rejects.toThrow()
  })
})
