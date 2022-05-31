//The user server for the user service (user.js)
require(" dotenv"). config ();
const express = require( 'express' );

// Connect

require('.../db/db');

const User = require('/User');

const app = express();
 const port = 5000;

app .use(express.json ())

app post('/user', (req, res) =>{

const newUser = new User (... req. body});

newUser. save (). then (() =>{

res. send('New user created Successfully!');
}).catch ((err)=>{
  res.status (500).send( 'Internal Server Error!');

})

app.get('/user/:id', (req, res) =>

User.findByID(). then ((user)=>{

if (user){
  res.json (user)

}else ( res.status (404).send('user not found');
}
}).catch ((err)=>{

res .status (500).send( 'Internal Server Error!');

});

})

app.get('/user/:id' ,(req, res) =>{

User. FindById (req .params, id). then ((user) =>{

if (user) {
  res. json (user);
}else{
res. status (404). send('user not found)')
}). catch ((err)=>{

res status (500). send('Internal Server Error!');

});
})

app. delete('/user/:id', (req, res)=>{

User.findByIdAndRemove(req. params. id). then ((user) =>{
  if (user) {
    res. json ('user deleted Successfully');

} else {

res. status (404). send('User Not Found!'');
}
}).catch ((err)=>{
  res .status (500).send('Internal Server Error!');

});

});

app .listen (port, ()=>{
  console. log('User service running on port ${port}');

})

Run user service at port 5000
