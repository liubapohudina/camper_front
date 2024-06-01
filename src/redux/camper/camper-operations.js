import { createAsyncThunk } from '@reduxjs/toolkit';

import {campersFetch } from '../../services/apiCamper';

export const getCampers = createAsyncThunk(
    'products/products',
    async (page, { rejectWithValue }) => {
        try {
            const data = await campersFetch(page);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);