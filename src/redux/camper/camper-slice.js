import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './camper-operations';

const campersSlice = createSlice({
    name: 'campers',
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
                const currentPage = action.meta.arg;
                if (currentPage === 1) {
                    state.products = action.payload;
                } else {
                    state.products = [...state.products, ...action.payload];
                }
                state.isLoadMore = action.payload.length === 4;
                state.isLoading = false;
            })
            .addCase(getCampers.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false; 
            }),
});

export default campersSlice.reducer;
