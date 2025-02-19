// const express = require("express");
// const { register, login, getProfile } = require("../controllers/authController");
// const { protect } = require("../middlewares/authMiddleware");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/profile", protect, getProfile);

// module.exports = router;

const express = require("express");
const { register, login } = require("../controllers/authController");
const { registerValidator, loginValidator } = require("../validators/authValidator");
const { validateRequest } = require("../middlewares/validateMiddleware");

const router = express.Router();

router.post("/register", registerValidator, validateRequest, register);
router.post("/login", loginValidator, validateRequest, login);

module.exports = router;