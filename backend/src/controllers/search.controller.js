const express = require("express");

const router = express.Router();

const Search = require("../models/search.model");

router.get("/" , async (req , res ) => {

    const courses = await Search.find().limit(10).lean().exec();
   
    return res.send({courses})
      
   });
 module.exports = router;