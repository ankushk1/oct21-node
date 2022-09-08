const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const dotenv = require("dotenv");
dotenv.config()

const cors = require("cors");
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/author", authorRoutes);


// localhost:8000/users/signup
// localhost:8000/products/createTodo

app.set("secretKey", "oct21Nodeapp");
const todoArr = [
  { id: 1, name: "Todo1" },
  { id: 2, name: "Todo2" }
];

// app.get("/getTodos", (req, res) => {
//   const responseObj = {
//     todos: todoArr,
//     messages: "Todos fetched successfully"
//   };
//   return res.json(responseObj);
// });

// app.post("/createTodo", (req, res) => {
//   todoArr.push(req.body);
//   return res.json({ messages: "Todo created successfully" });
// });

// app.put("/updateTodo", (req, res) => {
//   console.log(req.body);
//   const todoId = req.body.toBeUpdatedId;
//   const todoIndex = todoArr.findIndex((todo) => todo.id === todoId);
//   todoArr[todoIndex] = { id: req.body.id, name: req.body.name };
//   return res.json({ messages: "Todo updated successfully" });
// });

// app.delete("/deleteTodo", (req, res) => {
//   const todoId = req.body.toBeDeletedId;
//   const todoIndex = todoArr.findIndex((todo) => todo.id === todoId);
//   todoArr.splice(todoIndex, 1);
//   return res.json({ message: "Todo deleted successfully" });
// });

// app.get("/getTodoById", (req, res) => {
//   console.log(req.query)
//   console.log('params-->',req.params)
//   const todoId = req.body.id;
//   const todo = todoArr.find((todo) => todo.id == todoId);
//   console.log(todo)
//   return res.json({ todo: todo, message: "Todo fetched successfully" });
// });

app.get("/", (req, res) => {
  res.send("Hey node server running");
});

app.listen(port, () => {
  console.log(`Server successfully running on ${port}`);
});
