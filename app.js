// checks if we are running in the production environment or not
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const indexRouter = require("./routes/index")
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology:true,useNewUrlParser:true});
//log if we are or are not connected to our database
const db = mongoose.connection;
// in case there is an error while connecting to our database we want to print the error
db.on('error', error =>console.error(error));
//making sure we are connected to database
db.once('open',() => console.log("connected to mongoose"));
app.use("/", indexRouter);




app.listen(process.env.PORT || 3000,()=>{
    console.log("server is up and running on port 3000!");
});
