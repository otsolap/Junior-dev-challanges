const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost/coffee-app')
        console.log('Connected to coffee-app DB')
    } catch (err) {
        console.log('Could not connect to database.')
    }
}