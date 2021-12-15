const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

router.get("/" , async (req , res ) => {

    const courses = await Course.find().limit(10).lean().exec();
   
    return res.send({courses})
      
   });
 module.exports = router;