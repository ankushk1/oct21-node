const Author = require("../model/Author");
const Book = require("../model/Book");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.findOne({ name: req.body.name });
    if (book) {
      return res.status(200).json({ message: "Book already exists" });
    }

    const newBook = await Book.create(req.body);

    return res.status(200).json({ message: "Book created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author', 'name age' );

    // const updatedBooksWithAuthor = await Promise.all(
    //   books.map(async (book) => {
    //     const author = await Author.find({ _id: book.author });
    //     return { ...book, author: author[0] };
    //   })
    // );
    // console.log(updatedBooksWithAuthor);

    if (!books) {
      return res.status(400).json({ message: "Error getting books" });
    }

    if (books && books.length === 0) {
      return res.status(400).json({ message: "No books found" });
    }

    return res
      .status(200)
      .json({ booksData: books, messages: "Books fetched successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.getBookbyId = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res
        .status(400)
        .json({ message: "Error getting book/ Invalid Id" });
    }
    return res
      .status(200)
      .json({ bookData: book, messages: "Book fetched successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.deleteBookbyId = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookDeleted = await Book.findByIdAndDelete(bookId);
    if (!bookDeleted) {
      return res
        .status(400)
        .json({ message: "Error deleting book / Invalid Id" });
    }
    return res.status(200).json({ messages: "Book Deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.updateBookbyId = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookUpdated = await Book.findByIdAndUpdate(bookId, req.body);
    console.log(bookUpdated);
    if (!bookUpdated) {
      return res
        .status(400)
        .json({ message: "Error updating book / Invalid Id" });
    }
    return res.status(200).json({ messages: "Book updated successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};
