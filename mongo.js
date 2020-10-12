const mogoose = require ("mongoose");
 require("dotenv").config();


 mogoose.Promise = global.Promise;
  mogoose.connect("mongodb+srv://nodejsuser:nodejspassword@cluster0.jwfzj.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true ,useNewUrlParser: true});
