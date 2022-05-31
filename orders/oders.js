require(" doteny").config();
const express = require('express');

const mongoose = require('mongoose');
const axios require('axios ');

require ('../db/db');

const Order = require('./Order');
const app =express ();

const port = 9000;
app.use(express.json());
app.post('/order',(req, res)=>{
  const newOrder = new Order({
    customerID: mongoose. Types. ObjectId (req. body. userID),
    bookID: mongoose .Types. Objectid (req .body. foodID).

    initialDate: req.body.initialDate,
    deliveryDate: req.body.deliveryDate

  });


newOrder.save ().then(()=>{
  res.send( 'New order added Successfully!');
}).catch ((err)=>){
  res .status (500). send('Internal Server Error!');

app get('/orders', (reg, res)=>{

Order.find(). then ((orders)=> (
  if (orders){

res.json (orders);

} else { res .status (404). send ('Orders not found');

}).catch ((err)=>{
  res. status (500).send('Internal Server Error!');

}}

}}

app.get(/order/:id (req, res)=>{
  Order.findById(req.params. id). then ((order)=>{
    if (order){

axios.get('http://localhost:5000/user/${order. userID}

'). then ((response) =>{

let orderObject (

CustomerName: response.data.name,
Food Title: ''

axios.get('http://localhost:3000/food/${order.foodID}').then ((

orderObject.Food.Title = response.data.title ,
 res.json (order Object);
)}
)}
} else {
  res.status (404).send('Orders not found');

}).catch ((err)=>{

res .status (500). send('Internal Server Error!');
