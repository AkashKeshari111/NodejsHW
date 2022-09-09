
//import 
const express= require("express");

//express validator
const { body, validationResult } = require('express-validator');
const morgan = require("../middleware/Logger");



//create Router
const app= express.Router();
app.use(morgan)


//post req

app.post("/",
  body("id").isNumeric(),
  body("Name").isString(),
  body("Rating").isNumeric(),
  body("Description").isString(),
   body("Genre").isString(),
   body("Cast").isString(),
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body)
   
})



//export 
module.exports=app;