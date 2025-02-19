const jwt = require("jsonwebtoken");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email band" });

    const user = await User.create({ username, email, password });

    const accessToken = generateToken(user._id, "15m");
    const refreshToken = generateToken(user._id, "7d");

    res.status(201).json({ user, accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Noto‘g‘ri email yoki parol" });
    }

    const accessToken = generateToken(user._id, "15m");
    const refreshToken = generateToken(user._id, "7d");

    res.json({ user, accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};