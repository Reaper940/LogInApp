// const { Timestamp } = require('mongodb');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;



// const userSchema = new Schema({
//     email: {
//     type: String,
//   },password: {
//     type: String,
//   },Timestamp:{
//     true
//   }

// });


// const User = mongoose.model('User', userSchema);
// module.exports = User;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
