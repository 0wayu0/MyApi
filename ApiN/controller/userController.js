const User = require("../models/userModels")

exports.getAllUser = async (req, res, next) => {
  try {
    const user = (await User.find())
    if(!user){
      throw new Error('ไม่พบข้อมูล');
    }
    res.status(200).json({
      data: user
  })
  } catch (error) {
    res.status(400).json({
      error:{
        message:'เกิดข้อผิดพลาด' + error.message,
      }
    })
  }
}

