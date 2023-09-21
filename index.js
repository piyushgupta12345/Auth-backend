const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json());

// import database
const dbConnect = require('./config/database')
dbConnect()

// import and mount routes
const user = require("./routes/user");
app.use("/api/v1", user);

// server start
app.listen(PORT,()=>{
    console.log(`server is started at the port ${PORT}`)
})

// default routes
app.get("/",(req, res)=>{
    res.send("<h1>Hello welcome to the my homepage</h1>")
})