const mongoose = require('mongoose');


const option = {
    toJSON: { virtuals: true },
    timestamps: true
}
const Schema = mongoose.Schema;

const schema = Schema({
    attackP: { type: Number, require: true },
    attackPBroken: { type: Number },
    durability: { type: Number },
    weapon: { type: Schema.Types.ObjectId, ref: 'weapons' }
}, option)


const weaponOrange = mongoose.model('weaponOrange', schema)
module.exports = weaponOrange;