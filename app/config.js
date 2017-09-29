module.exports = {  
    port: process.env.PORT || 3000,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'users',
    user: 'local',
    password: 'local',
    port: 3306
  }
};
