import React, { useContext } from 'react';
import { StoreContext } from '../Context/Storecontext';// Fixed import case sensitivity
import './Food_display.css';
import FoodItem from '../FoodItem/FoodItem';

const Food_display = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Access context values

  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishes near you</h2>
     <div className="food-disply-list">
      {food_list.map((item,index)=>{
        return <FoodItem key={index} id={item._id} description={item.description} 
        price={item.price} image={item.image}/> 

      })}
     </div>
    </div>
  );
};

export default Food_display;
