const express = require('express');
const router = express.Router();

/* GET api calls */
router.get('/', function(req, res, next) {
    res.send('api listening');
    next();
});

router.post('/',function (req,res,next) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send("Your name is " + firstName + " " + lastName);
    next();
})

module.exports = router;