const mongoose = require("mongoose");


// define schema
var nameSchema = mongoose.Schema({
    first:   String,
    last: String
});


// create model
var Name = mongoose.model("Name", nameSchema);


function create(name, callback) {

    Name.create(name, callback);
}


function read(callback) {

    Name.find(callback);
}

//FIXME: this doesn't work right now
function findById(id,callback){
   Name.findById(id,callback); 
}

function update(first, last, callback) {

    let query   = {first: String};
    let update  = {last: String};
    let options = {new: true};

    Name.findOneAndUpdate(query, update, options, callback);
}


function destroy(id, callback) {

    let query = {_id: id};

    Name.findOneAndRemove(query, callback);
}


// exports
exports.create  = create;
exports.read    = read;
exports.update  = update;
exports.destroy = destroy;
exports.findById = findById;