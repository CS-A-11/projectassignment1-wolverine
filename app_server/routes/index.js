var express = require("express");
var router = express.Router();
var ctrlHome = require("../controllers/home");
var ctrlOthers = require("../controllers/others");
var ctrllogin = require("../controllers/login");
var ctrlsignUp = require("../controllers/signUp");
var ctrlorders = require("../controllers/orders");
var ctrlfeedback = require("../controllers/feedback")
/* Locations pages */
 router.get("/", ctrlHome.homelist);
 router.get("/location", ctrlHome.locationInfo);
 router.get("/location/review/new", ctrlHome.addReview);

/* Other pages*/
router.get("/about", ctrlOthers.about);
router.get("/login", ctrllogin.login);
router.get("/signUp", ctrlsignUp.signUp);
router.get("/orders", ctrlorders.orders);
router.get("/feedback", ctrlfeedback.feedback);


module.exports = router;
