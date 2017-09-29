module.exports = {  
    port: process.env.PORT || 8123,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'users',
    user: 'local',
    password: 'local',
    port: 3306
  }
};