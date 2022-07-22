const Author = require("../model/Author");

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({ name: req.body.name });
    console.log(author);
    if (author) {
      return res.status(200).json({ message: "Author already exists" });
    }

    const authorCreated = await Author.create(req.body);
    if (!authorCreated) {
      return res.status(404).json({ message: "Error creating author" });
    }

    return res.status(200).json({ message: "Author created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate(
      "books_published",
      "name description price"
    );

    if (!authors || authors.length === 0) {
      return res.status(400).json({ message: "No authors found" });
    }

    return res
      .status(200)
      .json({ authorData: authors, message: "Authors fetched successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const authorID = req.params.id;
    const author = await Author.findByIdAndDelete(authorID);

    if (!author) {
      return res.status(400).json({ message: "Error deleting author" });
    }

    return res.status(200).json({ message: "Authors deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const authorID = req.params.id;
    const author = await Author.findByIdAndUpdate(authorID, req.body);
    if (!author) {
      return res.status(400).json({ message: "Error updating author" });
    }
    return res.status(200).json({ message: "Authors updated successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};
