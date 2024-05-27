/* eslint-disable import-helpers/order-imports */
import 'dotenv/config'
import { FastifyAdapter, IFastifyAdapter } from '@/main/adapters'
import env from '@/main/config/env'
import { routes } from '@/main/routes'
import { Routes } from '@/presentation/protocols'
import { databaseInit } from '@/infra/database/mysql/helper/mysql.helper'

const main = async (): Promise<void> => {
  databaseInit()
  const fastifyAdapter: IFastifyAdapter = new FastifyAdapter(routes as Routes[], env.port)
  await fastifyAdapter.start()
}

main()
