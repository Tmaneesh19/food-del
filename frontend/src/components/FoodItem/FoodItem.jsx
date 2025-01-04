import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [quantity, setQuantity] = useState(cartItems[id] || 0);

  const generateRandomStars = () => {
    const randomRating = Math.floor(Math.random() * 6); // Generate a random rating from 0 to 5
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(i < randomRating ? assets.star : assets.star2); // Use image assets
    }

    return stars;
  };

  const [stars, setStars] = useState(generateRandomStars());

  const handleAddClick = () => {
    setQuantity(1);
    addToCart(id, name, price, image);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    addToCart(id, name, price, image);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      addToCart(id, name, price, image);
    } else {
      setQuantity(0);
      removeFromCart(id);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url + "/images/" + image} alt={name} />
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p className='food-item-name'>{name}</p>
          <div className='rating'>
            {stars.map((star, index) => (
              <img key={index} src={star} alt={`Star ${index + 1}`} />
            ))}
          </div>
          <img
            src={isFavorited ? assets.favon : assets.favoff}
            alt="favorite icon"
            className="favorite-icon"
            onClick={toggleFavorite}
          />
        </div>
        <p className='food-item-desc'>{desc}</p>
        <div className='add'>
          <p className='food-item-price'>Rs.{price}</p>
          {quantity === 0 ? (
            <button onClick={handleAddClick} className="add-button">ADD</button>
          ) : (
            <div className="item-quantity-controls">
              <button onClick={decreaseQuantity} className="quantity-button">-</button>
              <span className="item-quantity">{quantity}</span>
              <button onClick={increaseQuantity} className="quantity-button">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;