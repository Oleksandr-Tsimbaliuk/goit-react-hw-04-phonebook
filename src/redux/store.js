import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    appContacts: contactsReducer,
  },
});
