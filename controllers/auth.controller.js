const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const config = require("../config/config");


const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    config.jwtSecret,
    {
      expiresIn: "1h",
    }
  );
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = generateToken(user);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Error during login: " + err.message });
  }
};

const register = async (req, res) => {
  try {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: await bcrypt.hash(req.body.password, 10),
      role: req.body.role
    };

    console.log(userData);

    const user = await User.findOne({email: userData.email});
    if(user) {
      return res
      .status(500)
      .send({ success: false, message: "user with given email already exists" });
    }

    const newUser = new User(userData);
    const response = await newUser.save();

    if (response) {
      return res.status(200).send({
        success: true,
        message: "signup successfull, please verify your mail",
      });
    }

    return res
      .status(500)
      .send({ success: false, message: "there is some problem" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

module.exports = { login, register };
