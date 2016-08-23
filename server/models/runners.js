// grab the things we need
var mongoose = require('mongoose'),
    runnersSchema;

// create a schema
runnersSchema = new mongoose.Schema({
    Runner: String,
    Lap_1 : String,
    Lap_2 : String,
    Lap_3 : String,
    Lap_4 : String,
    Timing: String
}, {
    collection: 'runners'
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('Runners', runnersSchema);