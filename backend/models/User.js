const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

console.log("In backend user.js");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Using "userCollection" as the MongoDB collection name
module.exports = mongoose.model("User", userSchema, "userCollection");
