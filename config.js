// modified with Heroku connection
var dev_db_url = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";

cOptions = {
  //origin: "https://ogjaylowe.github.io",
  origin: "*",
  methods: "GET, POST, DELETE, PUT",
  allowedHeaders: "Content-Type, Accept, Origin",
  preflightContinue: false,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var configValues = {
  db: process.env.MONGODB_URI || dev_db_url,
  corsOptions: cOptions
}

module.exports = configValues;