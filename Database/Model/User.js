const mongoose = require("mongoose");

// Making table
const User = mongoose.model("User", {
  name: { type: String },
  age: { type: Number },
});

module.exports = User;
