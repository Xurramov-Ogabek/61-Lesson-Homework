const { body } = require("express-validator");

exports.registerValidator = [
  body("name").notEmpty().withMessage("Ism majburiy"),
  body("email").isEmail().withMessage("Email noto‘g‘ri"),
  body("password").isLength({ min: 6 }).withMessage("Parol kamida 6 ta belgi bo‘lishi kerak"),
];

exports.loginValidator = [
  body("email").isEmail().withMessage("Email noto‘g‘ri"),
  body("password").notEmpty().withMessage("Parol kiritilishi shart"),
];