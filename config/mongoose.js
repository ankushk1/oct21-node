const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/oct21",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", (err) => {
  console.log("error connecting to DB", err)
})

db.once('open', () => {
  console.log('Successfully connected to db')
})

