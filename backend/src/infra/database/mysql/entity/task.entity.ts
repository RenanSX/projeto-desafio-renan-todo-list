import { connectionDatabase } from '@/infra/database/mysql/helper/mysql.helper'
import { DataTypes, Model } from 'sequelize'
import { Optional } from 'sequelize'

export interface TaskAttributes {
  id?: number
  uuid: string
  title: string
  description: string
  editing: boolean
  completed: boolean
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface TaskInput
  extends Optional<TaskAttributes, 'id' | 'uuid' | 'completed' | 'editing' | 'createdAt' | 'updatedAt' | 'deletedAt'> {}
export interface TaskOutput extends Optional<TaskAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {}
export interface TaskCompleteInput
  extends Optional<
    TaskAttributes,
    'id' | 'uuid' | 'title' | 'description' | 'editing' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > {}

class Task
  extends Model<TaskAttributes, { omit: 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' }>
  implements TaskAttributes
{
  public id?: number
  public uuid!: string
  public title!: string
  public description!: string
  public editing!: boolean
  public completed!: boolean

  public readonly createdAt?: Date
  public readonly updatedAt?: Date
  public readonly deletedAt?: Date
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    editing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    timestamps: true,
    sequelize: connectionDatabase,
    paranoid: true, // Soft delete
    hooks: {
      afterCreate: (record: any) => {
        delete record.dataValues.id
        delete record.dataValues.updatedAt
        delete record.dataValues.createdAt
        delete record.dataValues.deletedAt
      },
      afterUpdate: (record: any) => {
        delete record.dataValues.id
        delete record.dataValues.updatedAt
        delete record.dataValues.createdAt
        delete record.dataValues.deletedAt
      },
      afterFind: (record: any) => {
        if (Array.isArray(record)) {
          record.forEach((r) => {
            delete r.dataValues.id
            delete r.dataValues.deletedAt
            delete r.dataValues.updatedAt
            delete r.dataValues.createdAt
          })
        }
      }
    }
  }
)

export default Task
