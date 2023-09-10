const mongoose = require('mongoose');


const option = {
    toJSON: { virtuals: true },
    timestamps: true
}
const schema = new mongoose.Schema({
    name: String,
    image: String,
}, option);

schema.virtual('listskills', {
    ref: 'skills',
    localField: '_id',
    foreignField: 'hero'

})

schema.virtual('listultimates', {
    ref: 'ultimates',
    localField: '_id',
    foreignField: 'hero'

})

const hero = mongoose.model('hero', schema)
module.exports = hero;