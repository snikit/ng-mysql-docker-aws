var server = require('./app/server');  
var repository = require('./app/repo');  
var config = require('./app/config');


console.log("--- Customer Service---");  
console.log("Connecting to customer repository...");

//  Log unhandled exceptions.
process.on('uncaughtException', function(err) {  
  console.error('Unhandled Exception', err);
});
process.on('unhandledRejection', function(err, promise){  
  console.error('Unhandled Rejection', err);
});

repository.connect({  
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port
}).then((repo) => {
  console.log("Connected. Starting server...");

  return server.start({
    port: config.port,
    repository: repo
  });

}).then((app) => {
  console.log("Server started successfully, running on port " + config.port + ".");
  app.on('close', () => {
    repository.disconnect();
  });
});