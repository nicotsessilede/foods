//The User.js file looks like
const mongoose require('mongoose ');
const UserSchema =  mongoose. Schema ({

name: {

type: String

require: true

}, age: {

type: Number,
require: true

}
})

const User = mongoose. model (" user", UserSchema) ;
 module. exports = User;
