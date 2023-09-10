const mongoose = require('mongoose');
// const { schema } = require('../userModel');

const option = {
    toJSON: { virtuals: true },
    timestamps: true
}
const Schema = mongoose.Schema;
const schema = Schema({
    ability: { type: String, require: true },
    cooldown: { type: String },
    focusType: { type: String },
    attackFocusType: { type: String },
    damage: { type: String },
    hero: { type: Schema.Types.ObjectId, ref: 'heros' }
}, option)

const skills = mongoose.model('skills', schema);
module.exports = skills;