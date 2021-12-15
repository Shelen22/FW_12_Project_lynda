const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

router.get("/" , async (req , res ) => {
  try{ 
    const courses = await Course.find().limit(12).lean().exec();
    return res.status(200).json(courses);
  }catch(e){
    return res.status(500).json({message: e.message});
  }
      
   });
 module.exports = router;