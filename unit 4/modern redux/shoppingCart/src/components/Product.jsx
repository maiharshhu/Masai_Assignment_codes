import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../cartSlice.js';

function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{product.name} - ₹{product.price} </span>
      <button onClick={() => dispatch(addItem(product))}>Add</button>
      <button onClick={() => dispatch(removeItem(product.id))}>Remove</button>
    </div>
  );
}

export default Product;
