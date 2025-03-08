import "./App.css";
import React from "react";
import FoodItems from './components/Fooditems';
import ErrorMessage from "./components/ErrorMessage";


function App() {
  let foodItems = [
    "Dal Roti",
    "Green Vegetables",
    "Fruits",
    "Salad",
    "Dry Fruits",
    "Ghee"
  ];
  //using if else condition
  // if(foodItems.length === 0) return <h3>I am Still Hungry</h3>

  // let emptyMessage = foodItems.length === 0 ? <h3>I am Still Hungry</h3> : null

  return (
    <>
      <h1 className = "food-heading" >Healthy Foods</h1>
      {/* ternary Operator */}
      {/* {emptyMessage} */}
      {/* Logical operator */}
      {/* {foodItems.length === 0 && <h3>I am Still Hungry</h3>} */}
      <ErrorMessage items = {foodItems}/>
       <FoodItems items = {foodItems}/> 
    </>
  );
}

export default App;
