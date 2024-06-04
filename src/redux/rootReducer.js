import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteSlice from './favorite/favorite-slice';
import camperSlice from './camper/camper-slice';
// import filterReducer from './filter/filter-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, favoriteSlice);

const rootReducer = combineReducers({
    favorite: persistedReducer,
    campers: camperSlice,
});

export default rootReducer;