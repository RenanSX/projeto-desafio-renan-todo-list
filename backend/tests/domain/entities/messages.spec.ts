import { MESSAGES } from '@/domain/entities/messages'

describe('MESSAGES', () => {
  it('should have the correct values', () => {
    expect(MESSAGES.tokenIsMissing).toBe('Token is missing')
    expect(MESSAGES.tokenIsInvalid).toBe('Token is invalid')
  })

  it('should generate the correct task not found message', () => {
    const id = '123'
    const expectedMessage = `Task with id ${id} not found`
    expect(MESSAGES.taskNotFound(id)).toBe(expectedMessage)
  })

  it('should generate the correct create task success message', () => {
    const id = '123'
    const expectedMessage = `Task created with success, ID: ${id}`
    expect(MESSAGES.createTaskSuccess(id)).toBe(expectedMessage)
  })

  it('should generate the correct update task success message', () => {
    const id = '123'
    const expectedMessage = `Task updated with success, ID: ${id}`
    expect(MESSAGES.updateTaskSuccess(id)).toBe(expectedMessage)
  })

  it('should generate the correct delete task success message', () => {
    const id = '123'
    const expectedMessage = `Task ${id} deleted with success`
    expect(MESSAGES.deleteTaskSuccess(id)).toBe(expectedMessage)
  })
})
