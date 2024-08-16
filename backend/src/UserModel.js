const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: [
    {
      street: {
        type: String,
      },
      suite: {
        type: String,
      },
      city: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      geo: [
        {
          lat: {
            type: String,
          },
          lng: {
            type: String,
          },
        },
      ],
    },
  ],
  phone: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  company: [
    {
      name: {
        type: String,
      },
      catchPhrase: {
        type: String,
      },
      bs: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
