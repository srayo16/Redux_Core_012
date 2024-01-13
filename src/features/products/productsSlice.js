import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchProducts, removeProduct } from "./productsAPI";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
    postSuccess: false,
    deleteSuccess: false
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    return await fetchProducts()
})
export const addProducts = createAsyncThunk("products/addProduct", async (data) => {
    return await addProduct(data)
})
export const removeProducts = createAsyncThunk("products/deleteProduct", async (data, thunkAPI) => {
    const deleteOne= await removeProduct(data);
    thunkAPI.dispatch(removeFromList(data))
    return deleteOne;
})
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        togglePostSuccess:(state,action)=>{
            state.postSuccess=false;
        },
        toggleDeleteSuccess:(state,action)=>{
            state.deleteSuccess=false;
        },
        removeFromList:(state,action)=>{
            state.products=state.products.filter(item=>item._id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.products = [];
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.products = action.payload;
            })
            .addCase(addProducts.pending, (state, action) => {
                state.isLoading = true;
                state.postSuccess=false;
                state.isError = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.postSuccess = false;
                state.error = action.error.message;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.postSuccess = true;
            })
            .addCase(removeProducts.pending, (state, action) => {
                state.isLoading = true;
                state.deleteSuccess=false;
                state.isError = false;
            })
            .addCase(removeProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.deleteSuccess = false;
                state.error = action.error.message;
            })
            .addCase(removeProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.deleteSuccess = true;
            })
    }
})
export const {togglePostSuccess,toggleDeleteSuccess,removeFromList} = productsSlice.actions
export default productsSlice.reducer;