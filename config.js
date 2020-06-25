// local
var mongoose = require('mongoose')
var db = 'mongodb://localhost/complete';
mongoose.connect(db), {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Mongo Atlas Recommendation
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// modified URL
var mongoose = require('mongoose')
var db = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
mongoose.connect(db), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// modified with Heroku connection
var mongoose = require('mongoose')
var dev_db_url = "mongodb+srv://jlowe:SgtPepper10@webappdb-7ymjf.mongodb.net/orion?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB), {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// testing connection command
mongoose.connection.on('connected', () => {
  console.log('connected')
});

// take two

/**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://jlowe:SgtPepper10@WebAppDB/test?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }