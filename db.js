const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://saireddygundeti902:saireddy9090@cluster0.d122z37.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () =>{
  mongoose.connect(mongoURI).then(()=>{
    console.log("DB Connected");
  }).catch((err)=>console.log(err));
}

module.exports = connectToMongo;