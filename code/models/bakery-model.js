const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myBakerySchema = new Schema(
  {
    photoUrl: { type: String },
    group: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
  }
);


const BakeryModel = mongoose.model("Bakery", myBakerySchema);

module.exports = BakeryModel;
