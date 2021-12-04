const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.rlm8x.mongodb.net/lib?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewauthorSchema = new Schema({
    title:String,
    country:String,
    field:String,
    image:String
});

var Authordata = mongoose.model('authordata', NewauthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;