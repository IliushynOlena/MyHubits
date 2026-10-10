import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  list: [
    { id: 1, title: 'Випити 2 літри води', completed: false, streak: 3 },
    { id: 2, title: 'Читання 30 хвилин', completed: true, streak: 5 },
  ],
  userName: 'Олексій',
};


export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now(),
        title: action.payload,
        completed: false,
        streak: 0,
      };
      state.list.push(newHabit);
    },
    toggleHabit: (state, action) => {
      const habit = state.list.find((h) => h.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
        if (habit.completed) {
          habit.streak += 1;
        } else {
          habit.streak = Math.max(0, habit.streak - 1);
        }
      }
    },
    deleteHabit: (state, action) => {
      state.list = state.list.filter((h) => h.id !== action.payload);
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    }
  },
});


export const { addHabit, toggleHabit, deleteHabit, updateUserName } = habitsSlice.actions;
export default habitsSlice.reducer;
