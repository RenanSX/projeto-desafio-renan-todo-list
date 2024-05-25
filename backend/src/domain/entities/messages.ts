export const MESSAGES = {
  invalidEmail: 'Invalid email',
  invalidPassword: 'Invalid password',
  loginSuccess: 'Login success',
  userAlreadyExists: 'Already exists',
  userCreationFail: 'Failed to create user',
  tokenIsMissing: 'Token is missing',
  tokenIsInvalid: 'Token is invalid',
  TaskNotFound: (id: string) => `Task with id ${id} not found`,
  userCreationSuccess: (email: string, userId: string) => `User ${email} created with success, ID: ${userId}`,
  createTaskSuccess: (id: string) => `Task created with success, ID: ${id}`,
  deleteTaskSuccess: (id: string) => `Task ${id} deleted with success`
}
