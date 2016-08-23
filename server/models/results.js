// grab the things we need
var mongoose     = require('mongoose'),
    resultSchema;

// create a schema
resultSchema = new mongoose.Schema({
  title       : String,
  description : String,
  poster      : String
},{
	collection : 'results'
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('Result', resultSchema);