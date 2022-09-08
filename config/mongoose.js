const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ankush:1t8v3ynymzkAetdT@cluster0.szogzvc.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// 1t8v3ynymzkAetdT
const db = mongoose.connection

db.on("error", (err) => {
  console.log("error connecting to DB", err)
})

db.once('open', () => {
  console.log('Successfully connected to db')
})

