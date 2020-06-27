// modified with Heroku connection
var dev_db_url = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";

var configValues = {
  db: process.env.MONGODB_URI || dev_db_url
}

module.exports = configValues;