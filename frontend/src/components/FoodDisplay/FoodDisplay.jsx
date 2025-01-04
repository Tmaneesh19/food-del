import React, { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets'; // Assuming `we.png` is in `assets`

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter the food items based on the selected category
  const filteredFoodList = food_list.filter(
    (item) => category === 'All' || category === item.category
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item) => (
            <FoodItem
              key={item._id}
              image={item.image}
              name={item.name}
              desc={item.description}
              price={item.price}
              id={item._id}

            />
          ))
        ) : (
          // Render the fallback image if no items are found
          <div className="no-items">
            <img src={assets.we} alt="No items available" />
            <p>No food items available in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
