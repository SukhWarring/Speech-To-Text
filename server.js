const express = require ("express");
const app = express();
app.use(express.static('./model'))

// databae connection
require("./mongo")
const mangoose = require ('mongoose');
const port = 3005;
const bodyParser = require("body-parser");

// models 
 require("./model/Post")


 //middleware
app.use(bodyParser.urlencoded({extended: false}))

const Post = mangoose.model("Post")

app.post('/search', async (req ,res) =>{
  res.send(req.body.q)
 try {
  const post = new Post();
  post.content = req.body.q;
   await post.save();
   res.send (post)
} catch ( error) {
  res.status(500)
}
console.log("output: "  +  req.body.q)
res.end()}
 )

 app.listen(port , function(){
    console.log(" server is running   port 3005")
})


