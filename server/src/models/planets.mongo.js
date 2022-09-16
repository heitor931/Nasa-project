const mongoose = require('mongoose')


const planetSchema = new mongoose.Schema({
    keplerName:{
        type: String,
        required: true
    }
});
// Connect the planet schema to the collection in Mongo DB
module.exports = mongoose.model('Planet', planetSchema)