import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, toggleDeleteSuccess, togglePostSuccess } from '../features/products/productsSlice';
import { useAddProductMutation, useDeleteProductMutation, useGetProductQuery } from '../features/api/apiSlice';

const Home = () => {
  // const dispatch = useDispatch();
  // const {products, isLoading,isError,error} = useSelector(state => state.products);
  // useEffect(()=>{
  //   dispatch(getProducts());
  //   dispatch(togglePostSuccess());
  //   dispatch(toggleDeleteSuccess());
  // } ,[]); 
  let content;
  const [postProduct, { isSuccess: isSuccess2, isLoading: isLoading2 }] = useAddProductMutation();
  const [remove, { isError: isError3 }] = useDeleteProductMutation();
  const { isError, isLoading, isSuccess, data, error } = useGetProductQuery(null, { refetchOnMountOrArgChange: true });
  if (isLoading) content = "Loading...";
  if (isError) content = error;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {(isLoading || isError) && <p>{content}</p>}
      {data &&
        data.map((product, index) => <ProductCard product={product} index={index} key={index} />)
      }
    </div>
  );
};

export default Home;