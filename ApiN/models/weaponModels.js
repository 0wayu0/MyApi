const mongoose = require('mongoose');


const option = {
    toJSON: { virtuals: true },
    timestamps: true
}
const schema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
}, option);

schema.virtual('listWeaponWhite', {
    ref: 'weaponWhite',
    localField: '_id',
    foreignField: 'weapon'
})
schema.virtual('listWeaponBlue', {
    ref: 'weaponBlue',
    localField: '_id',
    foreignField: 'weapon'
})
schema.virtual('listWeaponOrange', {
    ref: 'weaponOrange',
    localField: '_id',
    foreignField: 'weapon'
})
schema.virtual('listWeaponPurple', {
    ref: 'weaponPurple',
    localField: '_id',
    foreignField: 'weapon'
})

const weapon = mongoose.model('weapon', schema)
module.exports = weapon;