  import mongoose from 'mongoose';

  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    isActivated: {
      type: Boolean,
      default: false
    },
    activationLink: {
      type: String
    }
  }, {
    timestamps: true,
  });


  export default mongoose.models.User || mongoose.model('User', UserSchema);

