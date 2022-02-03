const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      select:false
    },
    email: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    phone_number: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.User = mongoose.model("User", userSchema);
