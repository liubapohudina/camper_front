import { createAsyncThunk } from '@reduxjs/toolkit';

import {campersFetch, filtercampersFetch } from '../../services/apiCamper';

export const getCampers = createAsyncThunk(
    'campers/products',
    async (currentPage, { rejectWithValue }) => {
        try {
            const data = await campersFetch(currentPage);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getFilteredCampers = createAsyncThunk(
    'campers/filtered',
    async(params, {rejectWithValue}) => {
        try {
           const data = await filtercampersFetch(params);
           return data;
        } catch(error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)