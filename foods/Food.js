//The Food. js model looks like

const mongoose = require('mongoose ');
const foodSchema = mongoose.Schema ({

title: {

type: String,
require: true

},

author: {

type: String,
require: true

}
const Food = mongoose.model (" food", FoodSchema);
module.exports = Food;
