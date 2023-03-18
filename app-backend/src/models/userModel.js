const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
  type: String,
  required: true,
  },
  lastName: {
  type: String,
  required: true,
  },
  email: {
  type: String,
  required: true,
  unique: true,
  },
  password: {
  type: String,
  required: true,
  },
  rol: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Role',
  default: "6414b36eaee0978828379273"
  },
  products: [
  {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Product",
  },
  ],
  tokens: [{
  token: {
  type: String,
  required: true
  }
  }]
  });

module.exports = mongoose.model("User", userSchema);
