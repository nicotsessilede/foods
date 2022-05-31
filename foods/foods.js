//The food server for the foods service looks like.

require("dotenv").config();
const express = require('express');

//Connect

require('../db/db');

const Food = require('./Food ');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/food',(req, res) => {

const newFood = new Food (...req.body});

newBook.save().then(() => {

}}


res.send('New Food added successfully!')
}).catch ((err)=>{
  res.status(500).send( 'Internal Server Error!');
})
})
app.get('/foods', (req, res)=>{

Food.find().then((foods)=>{

if (foods.length !=0){

res.json(foods);
} else{
  res.status(404).send('Food not found ');
}

}).catch((err)=>{
  res. status(500).send( 'Internal Server Error!');

});
 });

app.get('/food/: id', (req. res) =>{
  Food.findById(req.params.id).then ((food)=>{
     if (food) {
       res. json (food);
     } else {

res.status (404).send('Food not found ');
}).catch ((err) =>{
  res.status.(500).send( 'Internal Server Error!');

});

app.delete('/food/:id', (req, res) => {

Food.findOneAndRemove(req.params. id). then ((food) => {

if (food){

res.json ('Food deleted Successfully!'')

} else {

res.status (404).send('Food not found ');

} }).catch((err) => {
  res.status(500).send('Internal Server Error!');
});
});
app.listen(port, () {
  console.log('Food service ready on port: ${port} ');
})
