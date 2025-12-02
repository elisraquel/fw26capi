const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://elisferreira_db_user:Ee20070807@elisraquel.lm8qf4a.mongodb.net/?retryWrites=true&w=majority&appName=elisraquel";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
module.exports = (app) => {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
app.dbClient = client; 
}