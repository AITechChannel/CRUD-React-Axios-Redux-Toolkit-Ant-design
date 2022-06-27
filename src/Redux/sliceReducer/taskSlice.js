import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";
const taskSlice = createSlice({
  name: "task",
  initialState: { status: "idle", data: [] },
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.status = "loaded";
      console.log(current.state);
      state.data.push([...action.payload]);
    });

    builder.addCase(fetchApi.rejected, (state, action) => {
      state.status = "load fail";
    });
  },
});

export default taskSlice;

export const fetchApi = createAsyncThunk("users/fetchByIdStatus", async () => {
  const res = await taskApi.getData("projects");
  console.log(res);
  return res;
});
