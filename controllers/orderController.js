const Order = require("../models/Order");
const Ticket = require("../models/Ticket");

// Buyurtma yaratish
exports.createOrder = async (req, res) => {
  try {
    const { ticketId, quantity } = req.body;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) return res.status(404).json({ message: "Chipta topilmadi" });

    if (ticket.quantity < quantity) return res.status(400).json({ message: "Yetarli chipta yo‘q" });

    const totalPrice = ticket.price * quantity;
    const order = await Order.create({
      user: req.user.id,
      ticket: ticketId,
      quantity,
      totalPrice,
    });

    ticket.quantity -= quantity;
    await ticket.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Foydalanuvchining buyurtmalari
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("ticket");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin barcha buyurtmalarni ko'rishi
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("ticket");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};