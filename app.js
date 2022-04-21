const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/personDB');

const personSchema = new Schema({
  name: String,
  age: Number

});

const fruitSchema = new Schema({
  name: String,
  price: Number,
  reviews: [
    {
      name: String,
      rating: Number
    }
  ]
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: "jeff",
  age: 69
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const orange = new Fruit({
  name: "orange",
  price: 14,
  reviews:[
    {
      name: "moral",
      rating: 10
    }
  ]
});
const pineapple = new Fruit({
  name: "pineapple",
  price: 20,
  reviews:[
    {
      name: "moral",
      rating: 9
    }
  ]
});

Fruit.insertMany([orange, pineapple], (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("success data base");
  }
});


// person.save();


