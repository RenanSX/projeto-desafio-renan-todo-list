import Task from '@/infra/database/mysql/entity/task.entity'
import env from '@/main/config/env'
import { Sequelize } from 'sequelize'

export const connectionDatabase = new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
  host: env.dbHost,
  port: parseInt(env.dbPort || '3306', 10),
  dialect: 'mysql'
})
export const databaseInit = async (): Promise<void> => {
  await connectionDatabase.authenticate()
  await Task.sync({ alter: env.nodeEnv === 'development' })
}
