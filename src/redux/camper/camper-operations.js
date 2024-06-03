import { createAsyncThunk } from '@reduxjs/toolkit';

import {campersFetch } from '../../services/apiCamper';

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