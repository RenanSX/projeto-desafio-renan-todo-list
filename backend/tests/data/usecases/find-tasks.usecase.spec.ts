import { IFindTaskRepository } from '@/data/protocols/database/tasks'
import { FindTaskUseCase } from '@/data/usecases/tasks'
import { MESSAGES } from '@/domain/entities'

describe('FindTaskUseCase', () => {
  let findTaskRepository: IFindTaskRepository
  let findTaskUseCase: FindTaskUseCase

  beforeEach(() => {
    findTaskRepository = {
      find: jest.fn().mockResolvedValue({ id: 'test_id', title: 'Test Task', description: 'Test Description' })
    }
    findTaskUseCase = new FindTaskUseCase(findTaskRepository)
  })

  it('should call FindTaskRepository with correct id', async () => {
    const id = 'test_id'

    await findTaskUseCase.findTask(id)

    expect(findTaskRepository.find).toHaveBeenCalledWith(id)
  })

  it('should return the task if it is found', async () => {
    const id = 'test_id'

    const result = await findTaskUseCase.findTask(id)

    expect(result).toEqual({ id: 'test_id', title: 'Test Task', description: 'Test Description' })
  })

  it('should return a not found message if task is not found', async () => {
    const id = 'test_id'
    jest.spyOn(findTaskRepository, 'find').mockResolvedValueOnce(null)

    const result = await findTaskUseCase.findTask(id)

    expect(result).toEqual(MESSAGES.taskNotFound(id))
  })

  it('should throw if FindTaskRepository throws', async () => {
    const id = 'test_id'
    jest.spyOn(findTaskRepository, 'find').mockRejectedValueOnce(new Error())

    await expect(findTaskUseCase.findTask(id)).rejects.toThrow()
  })
})
