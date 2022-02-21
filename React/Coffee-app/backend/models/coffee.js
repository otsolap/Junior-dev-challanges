const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    roastLevel: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    }
})

module.exports = mongoose.model('coffee', coffeeSchema

)