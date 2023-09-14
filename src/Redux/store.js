import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ContactsSliceReduser } from './ContactsSlice/ContactsSlice';
import { FilterReduser } from './FilterSlice/FilterSlice';

const persistConfig = {
  key: 'root',
  storage,
};
