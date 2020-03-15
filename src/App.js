import React, { Component } from 'react';

import Friendly from './friendly';

var animalsFood = [
  {
    id: 0,
    name: "Fish",
    alive: true,
    img: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 1,
    name: "Rat",
    alive: true,
    img: "https://images.pexels.com/photos/51340/rat-pets-eat-51340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 2,
    name: "Elephant",
    alive: true,
    img: "https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 4,
    name: "Pig",
    alive: true,
    img: "https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 5,
    name: "Penguin",
    alive: true,
    img: "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 6,
    name: "Cat",
    alive: true,
    img: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 7,
    name: "Hamster",
    alive: true,
    img: "https://images.pexels.com/photos/3362697/pexels-photo-3362697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 8,
    name: "Tacos",
    alive: false,
    img: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 9,
    name: "Burger",
    alive: false,
    img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 11,
    name: "Pizza",
    alive: false,
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 12,
    name: "Steak",
    alive: false,
    img: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 13,
    name: "Pasta",
    alive: false,
    img: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 14,
    name: "Lobster",
    alive: false,
    img: "https://images.pexels.com/photos/2532439/pexels-photo-2532439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    id: 15,
    name: "Fish",
    alive: false,
    img: "https://images.pexels.com/photos/428355/pexels-photo-428355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
]

export default class App extends Component {
  render() {

    return (

      <div className='app'>
        <Friendly
          animalsFood={animalsFood}
        />
      </div>
    );
  }
}