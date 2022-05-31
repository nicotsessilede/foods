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

User, find (), then ((user)->{

if (user){ res.json (user)

}else ( res status (404).send('user not found); } }).catch ((err)=>{

res status (500).send( Internal Server Error!');

}):

})

Microservice-based architectures

Hands-on: creating the user service

app.get('/user/:id (req, res) =>{

User. FindByld (req params, id). then ((user) =>{ }else{

if (user) { res json (user);

res. status (404). send('user not found):) }

1). catch ((err)->{

1):

res status (500). send("Internal Server Error!"):

})

81/96

Microservice-based architectures Hands-on: creating the user service

app. delete(/user/:id (req, res)->

User findByld And Remove(req params. id). then ((user) =>{ if (user) { res json ('user deleted Successfully);

} else {

res, status (404) send('User Not Found!"); } }).catch ((err)=>{ res status (500).send('Internal Server Error!');

}):

}):

app listen (port. ()=>{ console, log('User service running on port $[port}');

}}

Run user service at port 5000
