const User = require('../model/User')


exports.signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }) // null or user obj
    if(user) {
      return res.status(400).json({message: 'User already exists'});
    }
    const newUser = await User.create(req.body) 
    if(!newUser){
      return res.status(400).json({message: 'User creation error'});
    }
    return res.status(200).json({message: 'User created successfully'})
  } catch (err) {
    return res.status(500).json({error: err , message: 'Internal Server Error'})
  }
}
