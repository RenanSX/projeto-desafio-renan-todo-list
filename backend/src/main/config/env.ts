export default {
  logLevel: process.env.LOG_LEVEL || 'debug',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  port: parseInt(process.env.PORT || '3333', 10),
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  authUser: process.env.AUTH_USERNAME,
  authPassword: process.env.AUTH_PASSWORD,
  nodeEnv: process.env.NODE_ENV || 'development'
}
