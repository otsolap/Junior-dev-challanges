const { MongoClient } = require("mongodb")
const uri = "mongodb://localhost/coffee-app"
const fs = require('fs')

let client = new MongoClient(uri)

const writeDBinJson = async () => {
    await client.connect()
    const coffees = client.db("coffee-app").collection("coffees")
    const db = await coffees.find({}).toArray()
    console.log(db)
    const dataJSON = JSON.stringify(db)
    fs.writeFileSync('backupDB.json', dataJSON)
}

module.exports = writeDBinJson