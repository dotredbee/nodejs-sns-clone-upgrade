const dotenv = require('dotenv')
const config = dotenv.config()

if(config.error)
    throw new Error("Could't find .env file")

process.env.NODE_ENV = (process.env.NODE_ENV && (process.env.NODE_ENV).trim().toLocaleLowerCase() === "production") ? "production" : "development";

if(process.env.NODE_ENV === "production") module.exports = require('./proc')
else module.exports = require('./dev')