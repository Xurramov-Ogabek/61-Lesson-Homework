const { body } = require("express-validator");

exports.ticketValidator = [
  body("eventName").notEmpty().withMessage("Tadbir nomi majburiy"),
  body("date").isISO8601().withMessage("Sanani YYYY-MM-DD formatida kiriting"),
  body("location").notEmpty().withMessage("Joylashuv majburiy"),
  body("price").isFloat({ min: 0 }).withMessage("Narx 0 dan katta bo‘lishi kerak"),
  body("quantity").isInt({ min: 1 }).withMessage("Chipta soni 1 dan katta bo‘lishi kerak"),
];