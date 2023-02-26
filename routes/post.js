const mongoose= require("mongoose");
// const plm = require("passport-local-mongoose");

const postSchema=mongoose.Schema({
  productname:String,
  price:String,
  image:String,
  rating:String,
  km:String,
  smallImage:String,
  tag:String,
  costumer:String

})

// postSchema.plugin(plm);

module.exports=mongoose.model("post",postSchema);