import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getFilteredCampers } from './camper-operations';

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        products: [],
        isLoadMore: false,
        isLoading: false,
        isError: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getCampers.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
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
                state.isError= action.payload;
                state.isLoading = false; 
            })
            .addCase(getFilteredCampers.pending, (state) => {
               state.isLoading = true;
               state.isLoadMore = false;
               state.isError = null;
            })
            .addCase(getFilteredCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                state.isLoadMore = false;
                if(action.payload.length === 0) {
                    state.isError = 'There are no offers for these categories'
                }

            })
            .addCase(getFilteredCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoadMore = false;
                if (action.payload === 'Not found') {
                    state.isError = 'No such address was found';
                } 
                if (action.payload === 'Not found' && action.meta.arg.form) {
                    state.isError = 'There are no offers for these categories';
                } 
            })
            
});

export default campersSlice.reducer;
