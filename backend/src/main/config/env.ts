export default {
  logLevel: process.env.LOG_LEVEL || 'debug',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  port: parseInt(process.env.PORT || '5000', 10),
  jwtSecret: process.env.JWT_SECRET || 'er123lan_local',
  cookieSecret: process.env.COOKIE_SECRET || 'lu123cio_local',
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  authUser: process.env.AUTH_USERNAME,
  authPassword: process.env.AUTH_PASSWORD,
  nodeEnv: process.env.NODE_ENV || 'development'
}
