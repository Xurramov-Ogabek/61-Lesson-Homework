const express = require("express");
const { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } = require("../controllers/ticketController");
const { protect, adminCheck } = require("../middlewares/authMiddleware");
const { ticketValidator } = require("../validators/ticketValidator");
const { validateRequest } = require("../middlewares/validateMiddleware");

const router = express.Router();

router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.post("/", protect, adminCheck, ticketValidator, validateRequest, createTicket);
router.put("/:id", protect, adminCheck, ticketValidator, validateRequest, updateTicket);
router.delete("/:id", protect, adminCheck, deleteTicket);

module.exports = router;