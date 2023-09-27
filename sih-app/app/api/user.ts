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
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'University',
        required:true
    }
  });

module.exports = {User: mongoose.model('User', userSchema)};