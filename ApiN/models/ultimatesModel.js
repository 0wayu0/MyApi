const mongoose = require('mongoose');
// const { schema } = require('../userModel');

const option = {
    toJSON: { virtuals: true },
    timestamps: true
}
const Schema = mongoose.Schema;
const schema = Schema({
    ability: { type: String, require: true },
    range: { type: String },
    damage: { type: Number },
    castTime: { type: String },
    attackFocusType: { type: String },
    focusType: { type: String },
    damReDurCast: { type: String },
    hero: { type: Schema.Types.ObjectId, ref: 'heros' }
}, option)

const ultimates = mongoose.model('ultimates', schema);
module.exports = ultimates;