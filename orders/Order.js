const mongoose = require('mongoose ');
const orderSchema= mongoose. Schema ({
  userID: {
    type mongoose.SchemaTypes. ObjectId,
    require: true
  },
 foodID: {

type mongoose.SchemaTypes.bookID,
 require true

initialDate:{
  type: Date,
  require: true

deliveryDate: {
  type Date,

require: false
}
}) const Order = mongoose.model("order", orderSchema);
module.exports =Order;
