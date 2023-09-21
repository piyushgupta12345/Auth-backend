const mongoose = require('mongoose');

require("dotenv").config();

// create db connection with mongoose
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Db connect successfully")
    })
    .catch((err)=>{
        console.log("db not connect some issue")
        console.error(err);
        process.exit(1);
    })
}

module.exports = dbConnect;