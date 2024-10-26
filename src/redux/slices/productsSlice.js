import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(API_URL);
    return await response.json();
});

export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        return await response.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selectedProduct: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchProductDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
