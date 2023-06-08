import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContac(state, action) {},
    setFilter(state, action) {},
  },
});

// Генераторы экшенов
export const { addContact, deleteContac, setFilter } = contactsSlice.actions;
// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;
