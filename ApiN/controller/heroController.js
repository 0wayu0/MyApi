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
exports.insertHero = async (req, res, next) => {
  try {
    const { name, image } = req.body; // Assuming you receive name and pic in the request body

    const newHero = new Hero({
      name,
      image      // Add other fields as needed
    });

    const savedHero = await newHero.save();

    res.status(201).json({
      data: savedHero,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: 'เกิดข้อผิดพลาด' + error.message,
      },
    });
  }
};

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

exports.deleteHero = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    console.log('Received DELETE request for hero ID:', id); // Log the received ID

    if (!id) {
      throw new Error('ID is missing'); // Check if ID is missing
    }

    // Use the `id` to find and delete the hero from the database
    const deletedHero = await Hero.findByIdAndDelete(id);
    if (!deletedHero) {
      return res.status(404).json({
        message: 'Hero not found',
      });
    }

    console.log('Deleted hero:', deletedHero); // Log the deleted hero
    res.status(200).json({
      message: 'Hero deleted successfully',
      data: deletedHero,
    });
  } catch (error) {
    console.error('Error deleting hero:', error); // Log the error
    res.status(400).json({
      error: {
        message: 'Error: ' + error.message,
      },
    });
  }
};
// controllers/heroesController.js

// ...

exports.updateHero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = req.body; // Updated hero data

    console.log('Received PUT request for hero ID:', id); // Log the received ID

    if (!id) {
      throw new Error('ID is missing'); // Check if ID is missing
    }

    // Use the `id` to find and update the hero in the database
    const updatedHero = await Hero.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedHero) {
      return res.status(404).json({
        message: 'Hero not found',
      });
    }

    console.log('Updated hero:', updatedHero); // Log the updated hero
    res.status(200).json({
      message: 'Hero updated successfully',
      data: updatedHero,
    });
  } catch (error) {
    console.error('Error updating hero:', error); // Log the error
    res.status(400).json({
      error: {
        message: 'Error: ' + error.message,
      },
    });
  }
};
