const mongoose = require ("mongoose");

const post_schema = mongoose.Schema({
    //title : { 
        //type: String,
        
    //},
    content :{
        type : String,
         
    }
})

module.exports = mongoose.model("Post", post_schema)