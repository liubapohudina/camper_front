import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './camper-operations';

const campersSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadMore: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCampers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCampers.fulfilled, (state, action) => {
                state.products = action.payload?.length
                    ? [...state.products, ...action.payload]
                    : state.products;
                state.isLoadMore = action.payload.length === 4;
            })
            .addCase(getCampers.rejected, (state, action) => {
                state.error = action.payload;
            }),
});

export default campersSlice.reducer;