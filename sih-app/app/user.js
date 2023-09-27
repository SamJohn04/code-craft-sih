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
    following: {
        type: Number,
        required:true
    }
  }, { timestamps: true });

  const User = mongoose.model('User', userSchema);

module.exports = User;