var express = require('express');
var router = express.Router();

const userModel = require("./users");
const mongo = require("./post");
const restro = require("./restro");
const passport = require("passport");
const passportLocal = require("passport-local");
const res = require('express/lib/response');
// const post = require('./post');


passport.use(new passportLocal(userModel.authenticate()));
/* GET home page. */
router.get('/', function(req, res) {
  res.render('data');
});
//-------------------------------------------------
router.get('/favour', function(req, res) {
  mongo.find()
  .then(function (val) {
    res.render("favour",{val})
    // res.send(val)
  })
});
router.get('/index', function(req, res) {
  mongo.find()
  .then(function (val) {
    res.render("index",{val})
    // res.send(val)
  })
});
router.get('/explore', function(req, res) {
  mongo.find()
  .then(function (val) {
    res.render("explore",{val})
    // res.send(val)
  })
});

//-------------------------------------------------

router.post('/create', function (req, res) {
  mongo.create({
    productname: req.body.productname,
    price: req.body.price,
    image: req.body.image,
    rating:req.body.rating,
    km:req.body.km,
    tag:req.body.tag,
    costumer:req.body.costumer
  }).then(function (val) {
    
    // res.send(val);
    res.redirect("/")
    
  })
});
//-------------------------------------------------
router.get("/show", function (req, res) {
  res.redirect('/index')
})
//------------------------------------------------------------
router.get('/', function(req, res) {
  res.render('data');
});
//---------------------------------------------------------------
router.post("/gotoresto", function (req, res) {
  var newUser = new restro({
    restroname: req.body.restroname,
    email: req.body.email,
    password: req.body.password
  })
  restro.register(newUser, req.body.password)
    .then(function (data) {
      passport.authenticate('local')(req, res, function () {
        res.redirect("/resturant");
      })
    })
})

router.get('/goto', function(req,res){
  res.render('restro')
});

router.post("/restro", passport.authenticate("local", {
  successRedirect: "/resturant",
  failureRedirect: "/"
}), function (req, res, next) { });
// //------------------------------------------------------
router.get("/logout", function (req, res, next) {
  req.logout();
  res.redirect("/")
});
// //--------------------------------------------------------------
function isLoggedIn(req, res, next) {
  if (req.isAunthenticate()) {
    return next();

  }
  else {
    res.redirect("/")
  }
}
module.exports = router;



















































// var express = require('express');
// var router = express.Router();

// const userModel = require("./users");
// const mongo = require("./post");
// const passport = require("passport");
// const passportLocal = require("passport-local");
// const res = require('express/lib/response');
// // const post = require('./post');


// passport.use(new passportLocal(userModel.authenticate()));
// //--------------------------------------------------------
// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// //------------------------------------------------------------
// router.get('/plus/:plc', function (req, res, next) {
//   userModel.findOne({ username: req.session.passport.user })
//     .then(function (userfound) {
//       mongo.findOne({ _id: req.params.plc })
//         .then(function (foundcart) {
//           foundcart.likes += 1;
//           foundcart.save().then(function () {
//             res.redirect("/showcart")
//           })

//         })
//     })
// });
// //--------------------------------------------------------------
// router.get('/minus/:plc', function (req, res, next) {
//   userModel.findOne({ username: req.session.passport.user })
//     .then(function (userfound) {
//       mongo.findOne({ _id: req.params.plc })
//         .then(function (foundcart) {
//           foundcart.likes -= 1;
//           foundcart.save().then(function () {
//           if(foundcart.likes===0){
//             userfound.cart.splice(req.params.plc,1)
//             userfound.save().then(function(){
              
//             })

//           }
//           res.redirect("/showcart")
//           })

//         })
//     })
// });

// //-------------------------------------------------------------
// router.get('/delete/:plc', function (req, res,) {
//   userModel.findOne({ username: req.session.passport.user })
//     .then(function (userfound) {
//       userfound.cart.splice(req.params.plc, 1)
//       userfound.save()
//         .then(function (removeuser) {
//           res.redirect("/showcart")

//         })
//     })

// });
// // router.get('/delete/:plc', function(req, res,) {
// //     mongo.findOneAndRemove({_id:req.params.plc})
// //     .then(function(deleteuser){
// //      res.redirect("/showcart")
// //     })
// // });
// //--------------------------------------------------------------
// router.get('/cart/:plc', function (req, res, next) {
//   userModel.findOne({ username: req.session.passport.user })
//     .then(function (loggedinuser) {
//       loggedinuser.cart.push(req.params.plc)
//       loggedinuser.save().then(function (val) {
//         res.redirect("/show")
//       })

//     })

// });
// //-------------------------------------------------------------------
// router.get("/showcart", function (req, res) {
//   userModel.findOne({ username: req.session.passport.user })
//     .populate("cart").then(function (carddetail) {
//       res.render("cart", { carddetail })
//     })
// })
// //------------------------------------------------------
// router.get("/show", function (req, res) {
//   mongo.find()
//     .then(function (userData) {
//       res.render('read', { userData })
//       // res.send(userData)
//     })
// })
// //--------------------------------------------------------
// router.post('/create', function (req, res) {
//   mongo.create({
//     productname: req.body.productname,
//     price: req.body.price,
//     image: req.body.image
//   }).then(function (val) {
//     // res.send(val);
//     res.redirect("/profile")
//   })
// });
// //--------------------------------------------------------
// router.get('/profile', function (req, res) {
//   userModel.findOne({ username: req.session.passport.user })
//     // .populate('Userposts')
//     .then(function (data) {
//       res.render('profile', { data })
//     })
// })
// //---------------------------------------------------------
// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/profile",
//   failureRedirect: "/"
// }), function (req, res, next) { });
// //------------------------------------------------------
// router.post("/register", function (req, res, next) {
//   var newUser = new userModel({
//     name: req.body.name,
//     username: req.body.username
//   })
//   userModel.register(newUser, req.body.password)
//     .then(function (data) {
//       passport.authenticate('local')(req, res, function () {
//         res.redirect("/profile");
//       })
//     })
// })
// //--------------------------------------------------------------
// router.get("/logout", function (req, res, next) {
//   req.logout();
//   res.redirect("/")
// });
// //--------------------------------------------------------------
// function isLoggedIn(req, res, next) {
//   if (req.isAunthenticate()) {
//     return next();

//   }
//   else {
//     res.redirect("/")
//   }
// }
// //-------------------------------------------------------------
// module.exports = router;



