const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  priority: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
});

module.exports = mongoose.model("Image", imageSchema);
