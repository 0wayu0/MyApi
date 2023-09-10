const WeaponBlue = require("../models/weaponBlueModels");
const Weapon = require("../models/weaponModels");
const WeaponOrange = require("../models/weaponOrangeModels");
const WeaponPurple = require("../models/weaponPurpleModels");
const WeaponWhite = require("../models/weaponWhiteModels");

exports.getAllWeapon = async (req, res, next) => {
    try {
      const weapon = (await Weapon.find().populate('listWeaponWhite').populate('listWeaponBlue').populate('listWeaponOrange').populate('listWeaponPurple'))
      if(!weapon){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weapon
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }
  exports.getWeaponByID = async (req, res, next) => {
    try {
    const {id} = req.params;
    const weapon = (await Weapon.findById(id).populate('listWeaponWhite').populate('listWeaponBlue').populate('listWeaponOrange').populate('listWeaponPurple'))
      if(!weapon){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weapon
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }
  exports.getAllWeaponWhite = async (req, res, next) => {
    try {
      const weaponWhite = (await WeaponWhite.find())
      if(!weaponWhite){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weaponWhite
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }

  exports.getAllWeaponBlue = async (req, res, next) => {
    try {
      const weaponBlue = (await WeaponBlue.find())
      if(!weaponBlue){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weaponBlue
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }

  exports.getAllWeaponOrange = async (req, res, next) => {
    try {
      const weaponOrange = (await WeaponOrange.find())
      if(!weaponOrange){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weaponOrange
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }

  exports.getAllWeaponPurple = async (req, res, next) => {
    try {
      const weaponPurple = (await WeaponPurple.find())
      if(!weaponPurple){
        throw new Error('ไม่พบข้อมูล');
      }
      res.status(200).json({
        data: weaponPurple
    })
    } catch (error) {
      res.status(400).json({
        error:{
          message:'เกิดข้อผิดพลาด' + error.message,
        }
      })
    }
  }