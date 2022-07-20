const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'Author'
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    published_year:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


const Book = mongoose.model("Book", bookSchema)

module.exports = Book;
