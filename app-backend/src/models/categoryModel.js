const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }],
    status: {
      type: Boolean,
      default: true,
    },
  });

  module.exports = mongoose.model('Category', categorySchema);