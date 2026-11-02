import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: '/images/snake-plant.svg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: '/images/spider-plant.svg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: '/images/peace-lily.svg',
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Aloe Vera',
        image: '/images/aloe-vera.svg',
        description: 'Purifies the air and soothes burns and cuts.',
        cost: '$14',
      },
      {
        name: 'Boston Fern',
        image: '/images/boston-fern.svg',
        description: 'Adds humidity and removes airborne pollutants.',
        cost: '$16',
      },
      {
        name: 'Areca Palm',
        image: '/images/areca-palm.svg',
        description: 'A natural humidifier that filters indoor toxins.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'Monstera',
        image: '/images/monstera.svg',
        description: 'Statement foliage that thrives on neglect.',
        cost: '$25',
      },
      {
        name: 'ZZ Plant',
        image: '/images/zz-plant.svg',
        description: 'Survives low light and infrequent watering.',
        cost: '$20',
      },
      {
        name: 'Golden Pothos',
        image: '/images/pothos.svg',
        description: 'A trailing vine that grows almost anywhere.',
        cost: '$11',
      },
      {
        name: 'Rubber Plant',
        image: '/images/rubber-plant.svg',
        description: 'Glossy leaves that need little more than light.',
        cost: '$19',
      },
      {
        name: 'Fiddle Leaf Fig',
        image: '/images/fiddle-leaf-fig.svg',
        description: 'Sculptural leaves for a bright corner.',
        cost: '$30',
      },
      {
        name: 'Chinese Evergreen',
        image: '/images/chinese-evergreen.svg',
        description: 'Tolerates shade and dry indoor air.',
        cost: '$17',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: '/images/lavender.svg',
        description: 'Calming fragrance that helps you sleep.',
        cost: '$13',
      },
      {
        name: 'Jasmine',
        image: '/images/jasmine.svg',
        description: 'Sweet night-blooming flowers and scent.',
        cost: '$21',
      },
      {
        name: 'Gardenia',
        image: '/images/gardenia.svg',
        description: 'Creamy white blooms with a rich perfume.',
        cost: '$24',
      },
      {
        name: 'Rosemary',
        image: '/images/rosemary.svg',
        description: 'Fresh pine aroma and a kitchen staple.',
        cost: '$10',
      },
      {
        name: 'Eucalyptus',
        image: '/images/eucalyptus.svg',
        description: 'Crisp menthol scent that clears the head.',
        cost: '$23',
      },
      {
        name: 'Mint',
        image: '/images/mint.svg',
        description: 'Cool fragrance and leaves you can pick.',
        cost: '$9',
      },
    ],
  },
];

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of items in the cart, shown on the cart icon.
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" onClick={handlePlantsClick}>
            <img src="/images/monstera.svg" alt="Paradise Nursery" className="navbar-logo" />
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
        <div className="navbar-links">
          <a href="/" onClick={handlePlantsClick}>
            Home
          </a>
          <a href="#plants" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#cart" onClick={handleCartClick} className="cart-link" aria-label="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="32"
              height="32"
              className="cart-icon"
            >
              <path
                fill="#faf9f9"
                d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8c19.5 0 33.9 18.17 29.4 37.16l-47.9 204.5c-5 21.6-24.3 36.8-46.5 36.8H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-11.5 0-21.4-8.2-23.6-19.5L50.1 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0H96zM128 464a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid" id="plants">
          {plantsArray.map((categorySection, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categorySection.category}</h2>
              <div className="product-list">
                {categorySection.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className={addedToCart[plant.name] ? 'product-button added-to-cart' : 'product-button'}
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
