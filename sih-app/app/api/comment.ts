const mongoose = require("mongoose");

// Schema for Comments
const commentSchema = new mongoose.Schema({
    // You can include fields like the user who commented, the comment text, and the date/time of the comment.
    user: {
      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      required: true
    },
    text: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
});
module.exports = {Comment: mongoose.model('Comment', commentSchema)};