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
