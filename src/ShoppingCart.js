import React, { useState } from "react";
import "./ShoppingCart.css"; // Import the CSS file

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Function to add an item to the shopping cart
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { name: newItem }]);
      setNewItem("");
    }
  };

  // Function to remove an item from the shopping cart
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Calculate the total number of items in the cart
  const totalItems = items.length;

  // Calculate the subtotal
  const subtotal = items.length > 0 ? items.length * 10 : 0;

  return (
    <div className="shopping-cart">
      <h2 className="title">Shopping Cart</h2>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="item-input"
      />
      <button onClick={addItem} className="add-button1">
        Add Item
      </button>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item.name}
            <button
              onClick={() => removeItem(index)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="total-items">Total items in cart: {totalItems}</p>
      <p className="subtotal">Subtotal: ${subtotal}</p>
    </div>
  );
}

export default ShoppingCart;
