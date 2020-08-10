const express =  require("express");
// getting router portion of express variable
const router = express.Router();

router.get("/",(req,res) => {
  res.render("index");
});



module.exports =router;