const Ticket = require("../models/Ticket");

// Chiptalarni olish
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bitta chipta olish
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Chipta topilmadi" });

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Yangi chipta qo'shish
exports.createTicket = async (req, res) => {
  try {
    const { eventName, date, location, price, quantity } = req.body;
    const newTicket = await Ticket.create({ eventName, date, location, price, quantity });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Chiptani yangilash
exports.updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTicket) return res.status(404).json({ message: "Chipta topilmadi" });

    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Chiptani o'chirish
exports.deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    if (!deletedTicket) return res.status(404).json({ message: "Chipta topilmadi" });

    res.json({ message: "Chipta o‘chirildi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};