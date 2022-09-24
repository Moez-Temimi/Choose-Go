const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");


//function sign up
async function signup(req, res) {
  try {
    const { username, email, password } = await req.body;
    const salt = await bcrypt.genSaltSync(10);

    const hash =  bcrypt.hashSync(password, salt);
    const user = await User.create({
      username: username,
      email: email,
      password: hash,
    });
    res.status(201).json("user created");
  } catch (err) {
    console.log(err);
    res.status(400).json("error");
  }
}
//function log in
async function login(req, res) {
 try {
  const {email,password}= await req.body;
  const user = await User.findOne({email:email});
  if(!user){
    return  res.status(401).json("user not found, please signup");
  }
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch){
    return  res.status(401).json("invalid password");
  }
  const exp = Date.now()+1000*60*60*7;
  const token = jwt.sign({sub:user._id,exp:exp},"5d00a600l75y");
  res.cookie("Authorization",token,{
    expires: new Date(exp),
    httpOnly:true,
    sameSite:"lax"
  });
  res.status(statusCode).json({
    status:"login success",
    token,
    user,
  });
 } catch (error) {
    console.log(error);
    res.status(400).json("error");
 } 
  }
//funciton log out
  function logout(req,res){
   try {
    res.clearCookie("Authorization");
    res.status(200).json("logout success");
    
   } catch (error) {
    console.log(error);
    res.status(400).json("error");
   }
  }
  //function to check authentication
  function checkAuth(req, res) {
    try {
      console.log(res)
      res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(400);
    }
  }
    //update user's profile
    const updateProfile = async (req, res) => {
      try {
        await User.findOneAndUpdate({ _id: req.params.id }, req.body);
    
        res.status(201).json({ message: "Profile updated successfully" });
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "update failed" });
      }
    };
    //get one User
const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json("error");
  }
};
  



module.exports = {
  signup,
  login,
  logout,
  checkAuth,
  updateProfile,
  getOneUser
};
