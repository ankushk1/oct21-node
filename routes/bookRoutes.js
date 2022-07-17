const express = require("express");
const {
  createBook,
  getBooks,
  getBookbyId,
  deleteBookbyId,
  updateBookbyId
} = require("../controller/bookController");
const router = express.Router();

router.post("/createBook", createBook);
router.get("/getBooks", getBooks);
router.get("/getBookbyId/:id", getBookbyId);
router.delete("/deleteBookbyId/:id", deleteBookbyId);
router.put("/updateBookbyId/:id", updateBookbyId);

module.exports = router;
