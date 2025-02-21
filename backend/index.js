const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config(); // Ensure this is at the top

const port = process.env.PORT || 5000;

// ✅ Debugging: Print DB URL to check if it's loaded
console.log("DB_URL:", process.env.DB_URL);

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173','https://book-store-mern-app-bqaj.vercel.app/'],
    credentials: true
}));

// Routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// ✅ Ensure DB_URL is set correctly
if (!process.env.DB_URL) {
    console.error("❌ Error: DB_URL is not defined in .env file");
    process.exit(1);
}

async function main() {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("✅ Mongodb connected successfully!");
}

main().catch(err => console.error("❌ MongoDB Connection Error:", err));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
