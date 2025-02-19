const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);