const { Schema, model } = require('mongoose');

const feedSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  likes: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
  comments: {
    text: Schema.Types.ObjectId,
    timestamp: Date,
  },
});


module.exports = {Feed: model('Feed', feedSchema)};