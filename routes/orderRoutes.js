const express = require("express");
const { createOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");
const { protect, adminCheck } = require("../middlewares/authMiddleware");
const { orderValidator } = require("../validators/orderValidator");
const { validateRequest } = require("../middlewares/validateMiddleware");

const router = express.Router();

router.post("/", protect, orderValidator, validateRequest, createOrder);
router.get("/", protect, getUserOrders);
router.get("/all", protect, adminCheck, getAllOrders);

module.exports = router;