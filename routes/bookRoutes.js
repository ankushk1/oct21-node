const express = require("express");
const {
  createBook,
  getBooks,
  getBookbyId,
  deleteBookbyId,
  updateBookbyId,
  deactivateBook,
  updateBookQuantity
} = require("../controller/bookController");
const { validateUser } = require("../middleware/jwt");
const router = express.Router();

router.post("/createBook", validateUser, createBook);
router.get("/getBooks", validateUser, getBooks);
router.get("/getBookbyId/:id", validateUser, getBookbyId);
router.delete("/deleteBookbyId/:id", validateUser, deleteBookbyId);
router.put("/updateBookbyId/:id", validateUser, updateBookbyId);
router.put("/deactivateBook/:id", validateUser, deactivateBook);
router.put("/updateBookQuantity/:id", validateUser, updateBookQuantity);

module.exports = router;
