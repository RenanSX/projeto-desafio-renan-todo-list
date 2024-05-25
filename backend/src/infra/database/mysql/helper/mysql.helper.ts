import { Sequelize } from 'sequelize'
import Task from '@/data/entity/task.entity'
import env from '@/main/config/env'

export const connectionDatabase = new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
  host: env.dbHost,
  dialect: 'mysql'
})
export const databaseInit = async (): Promise<void> => {
  await connectionDatabase.authenticate()
  await Task.sync({ alter: env.nodeEnv === 'development' })
}
