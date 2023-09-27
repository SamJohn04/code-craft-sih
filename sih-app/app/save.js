const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  savedItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feed', // Replace with the appropriate schema reference
    required: true,
  },
});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;
