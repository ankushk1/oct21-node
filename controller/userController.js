const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }); // null or user obj
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.status(400).json({ message: "User creation error" });
    }
    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid user/ Sign up first" });
    }
    const isPasswordMatching = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMatching) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const {_id, email} = user;
    const JWTtoken = jwt.sign({_id, email}, "secret", { 
      expiresIn: '2h'
    })
    return res.status(200).json({ token: JWTtoken,  message: "Signin Successfull" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};
