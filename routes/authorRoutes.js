const express = require("express");
const { createAuthor } = require("../controller/authorController");
const { validateUser } = require("../middleware/jwt");
const router = express.Router();


router.post("/createAuthor", createAuthor);


module.exports = router;
