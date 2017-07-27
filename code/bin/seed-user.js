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

AdminUser.create(
  UserArray, //1st arg = array of product info objects
  (err, AdminUserResults) => { //2nd arg = callback!
    if (err) {
      console.log("Oh oh, try again!");
      return;
    }
    AdminUserResults.forEach((oneAdmin) => {
      console.log("New Adin: " + oneAdmin.fullName);
    });
  }
);
