const Hero = require("../models/heroModels");
const Skills = require("../models/skillsModel");
const Ultimates = require("../models/ultimatesModel");

exports.getAllHero = async (req, res, next) => {
  try {
    const hero = (await Hero.find().populate('listultimates').populate('listskills'))
    if(!hero){
      throw new Error('ไม่พบข้อมูล');
    }
    res.status(200).json({
      data: hero
  })
  } catch (error) {
    res.status(400).json({
      error:{
        message:'เกิดข้อผิดพลาด' + error.message,
      }
    })
  }
}

exports.getHeroByID = async (req, res, next) => {
  try {
    const {id} = req.params;
    const hero = (await Hero.findById(id).populate('listultimates').populate('listskills'));
    if(!hero){
      throw new Error('ไม่พบข้อมูล');
    }
    res.status(200).json({
      data: hero
  })
  } catch (error) {
    res.status(400).json({
      error:{
        message:'เกิดข้อผิดพลาด' + error.message,
      }
    })
  }
}

exports.getAllskills = async (req, res, next) => {
  try {
    const skills = (await Skills.find())
    if(!skills){
      throw new Error('ไม่พบข้อมูล');
    }
    res.status(200).json({
      data: skills
  })
  } catch (error) {
    res.status(400).json({
      error:{
        message:'เกิดข้อผิดพลาด' + error.message,
      }
    })
  }
}

exports.getAllUltimates = async (req, res, next) => {
  try {
    const ultimates = (await Ultimates.find())
    if(!ultimates){
      throw new Error('ไม่พบข้อมูล');
    }
    res.status(200).json({
      data: ultimates
  })
  } catch (error) {
    res.status(400).json({
      error:{
        message:'เกิดข้อผิดพลาด' + error.message,
      }
    })
  }
}
