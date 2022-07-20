const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


const Author = mongoose.model("Author", authorSchema)

module.exports = Author;
