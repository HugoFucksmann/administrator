// src/store/slices/projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    // Add other project-related reducers
  },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;
