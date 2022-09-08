const mongoose = require('mongoose')

mongoose.connect( process.env.MONGO_URI || "mongodb://127.0.0.1:27017/oct21",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//AetIJiP1PloTzLZx

const db = mongoose.connection

db.on("error", (err) => {
  console.log("error connecting to DB", err)
})

db.once('open', () => {
  console.log('Successfully connected to db')
})

