const express = require('express');
const router = express.Router();
const BakeryModel = require('../models/bakery-model.js');
const UserModel = require('../models/user-model');

router.get('/api/menu/:group', (req, res, next) => {
  BakeryModel.find({group: req.params.group}, (err, allItems) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.json(allItems);
  });
});


// Add selected item to the cart
router.post('/api/addToCart', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message: "Get outta here"});
    return;
  }
  req.user.cartArray.push(req.body.idToAdd);
  req.user.save((err, updatedUser) => {
    if(err) {
      res.status(400).json(err);
      return;
    }

    res.json(updatedUser);
  });
});


// Makes the selected items display in Cart view
router.get('/api/displayCart', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message: "Not logged in, no access"});
    return;
  }

  UserModel.findById({_id: req.user._id})
    .populate('cartArray')
    .exec((err, userInfo) => {
      if(err) {
        res.status(400).json(err);
        return;
      }

      res.json(userInfo);
    });
});


// Allows only the Admin to add a new item
router.post('/admin', (req, res, next) => {
  const newAdminUser = new AdminUser ({
    AdminName:  req.body.name,
    AdminEmail:  req.body.email,
    AdminOwner: req.user._id
  });
  if (!req.user.admin) {
    res.status(401).json({message: "Not an Admin, so no access"});
    return;
  }

  newAdminUser.save ((err) => {
    if (err) {
      return next(err);
    }
    else {
      res.redirect('/login');
    }
  });
});


module.exports = router;
