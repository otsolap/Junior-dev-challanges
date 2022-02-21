const Coffee = require('../models/coffee')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const coffee = await new Coffee(req.body).save()
        res.send(coffee)
    } catch (err) {
        res.send(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const coffees = await Coffee.find()
        res.send(coffees)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router