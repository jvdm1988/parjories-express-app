const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BakeryModel = './bakery-model';

const myUserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    encryptedPassword: {
      type: String,
      required: true
    },
    cartArray: [{ type : Schema.Types.ObjectId, ref: "Bakery" }],
    
    isAdmin: {
      type: Boolean,
      default: false
    }

  },
  {
    timestamps: true
  }
);

const AdminUserSchema = Schema({
  AdminName:  String,
  AdminEmail: String,
  AdminPassword: String,
});


const UserModel = mongoose.model('User', myUserSchema);


module.exports = UserModel;
