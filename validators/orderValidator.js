const { body } = require("express-validator");

exports.orderValidator = [
  body("ticketId").notEmpty().withMessage("Chipta ID majburiy"),
  body("quantity").isInt({ min: 1 }).withMessage("Buyurtma soni 1 dan katta bo‘lishi kerak"),
];