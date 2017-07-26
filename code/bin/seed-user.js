const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const AdminUser = require("../models/user-model.js");

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

let passwordToSave = 'password';
const salt = bcrypt.genSaltSync(10);
const scrambledPassword = bcrypt.hashSync(passwordToSave, salt);

const UserArray = [{

  fullName: 'admin',
  email: 'admin@parjories.com',
  encryptedPassword: scrambledPassword,
  isAdmin: true

  },
];
