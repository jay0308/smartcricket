 
const express = require('express');
const router = express.Router({mergeParams: true});
const userController = require("./userController");
const postController = require("./postController");
const TokenValidator = require("../utils/validateTokenMiddleware");

router.use("/v3",TokenValidator.validate)

router.use("/user",userController);

router.use("/post",TokenValidator.validate,postController);

router.get('/', function (req, res) {
    res.send({ "welcome": "It's running" });
});

router.get('/v3/', function (req, res) {
    res.send({ "welcome": "It's authorized running" });
});

router.get('/sendSms', function (req, res) {
    let result = require("../services/SMSService").sendSms("9181785 00052","Hello buddy");
    res.send({ "message":result ? "SMS Sent" : "Not sent" });
});

module.exports = router;