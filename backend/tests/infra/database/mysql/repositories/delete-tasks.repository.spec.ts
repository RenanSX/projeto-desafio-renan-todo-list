import Task from '@/data/entity/task.entity'
import { DeleteTaskRepository } from '@/infra/database/mysql/repositories/tasks'

jest.mock('@/data/entity/task.entity', () => ({
  destroy: jest.fn().mockResolvedValue(1)
}))

describe('DeleteTaskRepository', () => {
  let deleteTaskRepository: DeleteTaskRepository

  beforeEach(() => {
    deleteTaskRepository = new DeleteTaskRepository()
  })

  it('should call Task.destroy with correct id', async () => {
    const id = 'test_id'

    await deleteTaskRepository.delete(id)

    expect(Task.destroy).toHaveBeenCalledWith({ where: { uuid: id } })
  })

  it('should return true if task is deleted', async () => {
    const id = 'test_id'

    const result = await deleteTaskRepository.delete(id)

    expect(result).toBe(1)
  })

  it('should return false if task is not found', async () => {
    const id = 'test_id'
    jest.spyOn(Task, 'destroy').mockResolvedValueOnce(0)

    const result = await deleteTaskRepository.delete(id)

    expect(result).toBe(0)
  })

  it('should throw if Task.destroy throws', async () => {
    const id = 'test_id'
    jest.spyOn(Task, 'destroy').mockRejectedValueOnce(new Error())

    await expect(deleteTaskRepository.delete(id)).rejects.toThrow()
  })
})
