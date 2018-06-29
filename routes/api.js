const express = require('express');
const Name = require('../models/Name.js');
const router = express.Router();


router.post('/',function (req,res) {
    let name = req.body;
    console.log(name);

    Name.create(name, function(err, name) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            res.json(name);
        }
    });
});

//OK got it, req.params is the route, req.query is the query
//TODO: make a function to pass params as a route
router.get('/id',function(req,res){
   Name.findById(req.query.id,function(err, name){
     if(err){
      return console.error(err); 
     }
     res.json(name);
   });
});

// http get
router.get('/', function(request, response) {

    Name.read(function(err, names) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(names);
        }
    });
});


module.exports = router;