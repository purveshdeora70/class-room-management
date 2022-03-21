require('dotenv').config();
const mongoClient = require("mongodb").MongoClient
const state = {
    db: null
}
module.exports.connect = (done) => {
    const url = process.env.MONGO_URL || process.env.MONGODBLINK;

    const dbname = "classroom"

    mongoClient.connect(url, (err, data) => {
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })
}
module.exports.get = () => {
    return state.db
}