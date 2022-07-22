const express = require("express");
const { createAuthor, getAuthors, deleteAuthor, updateAuthor } = require("../controller/authorController");
const { validateUser } = require("../middleware/jwt");
const router = express.Router();


router.post("/createAuthor", validateUser, createAuthor);
router.get("/getAuthors", validateUser, getAuthors);
router.delete("/deleteAuthor/:id", validateUser, deleteAuthor);
router.put("/updateAuthor/:id", validateUser, updateAuthor);


module.exports = router;
