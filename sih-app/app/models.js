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

const tagSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true // Ensures that tag names are unique
    }
  });

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true // Ensures that usernames are unique
    },
    email: {
      type: String,
      required: true,
      unique: true // Ensures that email addresses are unique
    },
    password: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
  }, { timestamps: true });

const likeSchema = new mongoose.Schema({
    // You can include fields like the user who liked the item and the date/time of the like.
    user: {
      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
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
  
  // Sample usage in another schema (e.g., for a post)
  const postSchema = new mongoose.Schema({
    // Other fields related to your post
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    // You can add other fields like tags, images, or any other relevant data.
    tags: [String], // An array of tags associated with the post
    images: [String], // An array of image URLs associated with the post
  });
  
  
  module.exports = Post;