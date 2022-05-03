const mongoose = require("mongoose");

// Creating table / modal
// Here table name - User, Column names : name, age
const User = mongoose.model("User", {
  name: { type: String },
  age: { type: Number },
});

module.exports = User;