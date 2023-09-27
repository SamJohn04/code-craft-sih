const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/practice");
    console.log("Connection successful");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();


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
      default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;