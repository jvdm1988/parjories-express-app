const Bakery = require("../models/bakery-model.js");


const mongoose = require("mongoose");

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);




const BakeryArray = [{

  // MACARONS -------------------------------------------------
    photoUrl: "/images/macarons/banana.jpg",
    group: "Macarons",
    name: "Banana",
    price: 1
  },
  {
    photoUrl: "/images/macarons/bdaycake.jpg",
    group: "Macarons",
    name: "BirthdayCake",
    price: 1
  },
  {
    photoUrl: "/images/macarons/champagne.jpg",
    group: "Macarons",
    name: "Champagne",
    price: 2
  },
  {
    photoUrl: "/images/macarons/choco.jpg",
    group: "Macarons",
    name: "Chocolate",
    price: 1
  },
  {
    photoUrl: "/images/macarons/cinnamon.jpg",
    group: "Macarons",
    name: "cinnamon",
    price: 1
  },
  {
    photoUrl: "/images/macarons/cookie.jpg",
    group: "Macarons",
    name: "Cookie",
    price: 1
  },
  {
    photoUrl: "/images/macarons/cosmopolitan.jpg",
    group: "Macarons",
    name: "Cosmopolitan",
    price: 2
  },
  {
    photoUrl: "/images/macarons/cotton.jpg",
    group: "Macarons",
    name: "Cotton",
    price: 1
  },
  {
    photoUrl: "/images/macarons/eggnog.jpg",
    group: "Macarons",
    name: "Eggnog",
    price: 2
  },
  {
    photoUrl: "/images/macarons/fruity.jpg",
    group: "Macarons",
    name: "Fruity",
    price: 1
  },
  {
    photoUrl: "/images/macarons/hazelnut.jpg",
    group: "Macarons",
    name: "Hazelnut",
    price: 1
  },
  {
    photoUrl: "/images/macarons/keylime.jpg",
    group: "Macarons",
    name: "Keylime",
    price: 1
  },
  {
    photoUrl: "/images/macarons/margarita.jpg",
    group: "Macarons",
    name: "Margarita",
    price: 2
  },
  {
    photoUrl: "/images/macarons/orange.jpg",
    group: "Macarons",
    name: "Orange",
    price: 1
  },
  {
    photoUrl: "/images/macarons/peachbellini.jpg",
    group: "Macarons",
    name: "Peach Bellini",
    price: 2
  },
  {
    photoUrl: "/images/macarons/pecan.jpg",
    group: "Macarons",
    name: "Pecan",
    price: 1
  },
  {
    photoUrl: "/images/macarons/pumpkin.jpg",
    group: "Macarons",
    name: "Pumpkin",
    price: 1
  },
  {
    photoUrl: "/images/macarons/redvelvet.jpg",
    group: "Macarons",
    name: "Red Velvet",
    price: 1
  },
  {
    photoUrl: "/images/macarons/sangria.jpg",
    group: "Macarons",
    name: "Sangria",
    price: 2
  },
  {
    photoUrl: "/images/macarons/smores.jpg",
    group: "Macarons",
    name: "S'mores",
    price: 2
  },
  {
    photoUrl: "/images/macarons/strawberry.jpg",
    group: "Macarons",
    name: "Strawberry",
    price: 1
  },
  {
    photoUrl: "/images/macarons/caramelapple.jpg",
    group: "Macarons",
    name: "Caramel Apple",
    price: 1
  },
  {
    photoUrl: "/images/macarons/carrotcake.jpg",
    group: "Macarons",
    name: "Carrot Cake",
    price: 1
  },
  {
    photoUrl: "/images/macarons/chococheesecake.jpg",
    group: "Macarons",
    name: "Chocolate Cheesecake",
    price: 1
  },
  {
    photoUrl: "/images/macarons/chococherry.jpg",
    group: "Macarons",
    name: "ChocoCherry",
    price: 1
  },
  {
    photoUrl: "/images/macarons/chocostrawberry.jpg",
    group: "Macarons",
    name: "Chocolate covered Strawberry",
    price: 1
  },

  // CUPCAKES -----------------------------------------------------
  {
    photoUrl: "/images/cupcakes/cup-angel-food-cake.jpg",
    group: "Cupcakes",
    name: "Angel Cake",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-baby-blue.png",
    group: "Cupcakes",
    name: "Baby Blue",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-baby-pink.png",
    group: "Cupcakes",
    name: "Baby Pink",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-cheesecake.png",
    group: "Cupcakes",
    name: "Strawberry Cheesecake",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-choco-chip.png",
    group: "Cupcakes",
    name: "Chocolate Chip",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-choco-vanilla.png",
    group: "Cupcakes",
    name: "Chocolate Vanilla",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-chocolate-turtle.jpg",
    group: "Cupcakes",
    name: "Chocolate Turtle",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-confettifun.png",
    group: "Cupcakes",
    name: "Confetti Fun",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-cookie-chip.png",
    group: "Cupcakes",
    name: "Cookie Chip",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-midnight-magic.jpg",
    group: "Cupcakes",
    name: "Midnight Magic",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-redvelvet.png",
    group: "Cupcakes",
    name: "Red Velvet",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-straw-shortcake.png",
    group: "Cupcakes",
    name: "Strawberry Shortcake",
    price: 3
  },
  {
    photoUrl: "/images/cupcakes/cup-weddingcake.png",
    group: "Cupcakes",
    name: "Wedding Cake",
    category: 'cupcake',
    price: 3
  },

  // PIES AND CAKES ----------------------------------------------
  {
    photoUrl: "",
    group: "Pies & Cakes",
    name: "",
    description: "",
    price: ""
  },
  {
    photoUrl: "",
    group: "Pies & Cakes",
    name: "",
    description: "",
    price: ""
  },
  {
    photoUrl: "",
    group: "Pies & Cakes",
    name: "",
    description: "",
    price: ""
  },
  {
    photoUrl: "",
    group: "Pies & Cakes",
    name: "",
    description: "",
    price: "",
  },
  {
    photoUrl: "",
    group: "Pies & Cakes",
    name: "",
    description: "",
    price: ""
  },
];

Bakery.create(
  BakeryArray, //1st arg = array of product info objects
  (err, BakeryResults) => { //2nd arg = callback!
    if (err) {
      console.log("Oh oh, try again!");
      return;
    }
    BakeryResults.forEach((oneBakery) => {
      console.log("New Item: " + oneBakery.name);
    });
  }
);

// ADMIN USER ---------------------------------------------------------
