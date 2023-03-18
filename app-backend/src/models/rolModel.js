const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions: [
    {
      type: String,
      enum: ['read', 'write', 'delete', 'update'],
      required: true
    }
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = mongoose.model('Role', roleSchema);