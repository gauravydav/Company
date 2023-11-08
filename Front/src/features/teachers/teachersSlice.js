import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    const response = await axios.get("http://localhost:9000/teachers/");
    console.log("Response from the API:", response.data); // Add a console.log statement

    return response.data;
  }
);
//

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: { entities: [], loading: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state) => {
        state.loading = "idle";
      });
  },
});

export default teachersSlice.reducer;
