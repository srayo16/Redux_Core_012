import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state=> state.cart.cart)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {cart.map(product=> <ProductCard product={product} key={product._id}/> )}
    </div>
  );
};

export default Cart;
