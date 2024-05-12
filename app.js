const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/post_comments_service")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/posts", postRoutes);
app.use("/posts", commentRoutes); // Nested route for comments

app.all("*", (req, res) => {
  res.send(404).json({ message: "Not Found" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
