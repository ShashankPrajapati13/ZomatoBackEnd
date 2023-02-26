const mongoose= require("mongoose");
// const plm = require("passport-local-mongoose");

const resrtroSchema=mongoose.Schema({
restroname:String,
email:String,
password:String,

})



module.exports=mongoose.model("restro",resrtroSchema);