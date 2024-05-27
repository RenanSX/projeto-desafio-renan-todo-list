export const MESSAGES = {
  tokenIsMissing: 'Token is missing',
  tokenIsInvalid: 'Token is invalid',
  taskNotFound: (id: string) => `Task with id ${id} not found`,
  updateTaskSuccess: (id: string) => `Task updated with success, ID: ${id}`,
  createTaskSuccess: (id: string) => `Task created with success, ID: ${id}`,
  deleteTaskSuccess: (id: string) => `Task ${id} deleted with success`
}
