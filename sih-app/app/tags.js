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


  
  const Tag = mongoose.model('Tag', tagSchema);

  module.exports = Tag;