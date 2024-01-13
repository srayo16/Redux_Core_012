import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice';
import filterSlice from '../features/filter/filterSlice';
import logger from 'redux-logger'
import productsSlice from '../features/products/productsSlice';
import { productAPI } from '../features/api/apiSlice';

const store = configureStore({
    // devTools: false,
    reducer:{
        [productAPI.reducerPath]: productAPI.reducer,
        cart: cartSlice,
        filter: filterSlice,
        // products: productsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
});

export default store;