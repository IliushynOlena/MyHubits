import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habitsSlice';

//import themeReducer from './themeSlice';


export const store = configureStore({
  reducer: {
    habits: habitsReducer,

    //theme:themeReducer

  },
});
