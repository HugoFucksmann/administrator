// src/store/slices/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    // Add other task-related reducers
  },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;
