const mogoose = require ("mongoose");

 mogoose.Promise = global.Promise;
  mogoose.connect("mongodb+srv://nodejsuser:nodejspassword@cluster0.jwfzj.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology: true ,useNewUrlParser: true});
