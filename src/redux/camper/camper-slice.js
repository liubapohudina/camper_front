import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getFilteredCampers } from './camper-operations';

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
            })
            .addCase(getFilteredCampers.pending, (state) => {
               state.isLoading = true;
               state.isLoadMore = false;
            })
            .addCase(getFilteredCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.isLoadMore = false;
            })
            .addCase(getFilteredCampers.rejected, (state, action) => {
                console.log(action.error.message)
                state.isLoading = false;
                state.isLoadMore = false;
                if(action.error.message) {
                    state.error = "Your search did not match anything";
                }
            })
});

export default campersSlice.reducer;
