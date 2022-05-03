const User = require("./Database/Model/User");

function insertUser(param) {
  const { name, age } = param;
  // Insert in db
  const insertInstance = new User({ name, age });
  return insertInstance.save();
}

function getAllUsers() {
  // select in db
  return User.find({});
}

module.exports = { insertUser, getAllUsers };
