const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB ga muvaffaqiyatli ulandi");
  } catch (error) {
    console.error("MongoDB ulanish xatosi:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;