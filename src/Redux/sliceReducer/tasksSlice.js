import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    status: "idle",
    activeTasks: [],
  },
  //   reducers: {
  //     add: (state, action) => {
  //       state.push(action.payload);
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(getActiveTasks.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getActiveTasks.fulfilled, (state, action) => {
      state.status = "success";

      state.activeTasks.push(...action.payload);
    });

    builder.addCase(getActiveTasks.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default tasksSlice;

export const getActiveTasks = createAsyncThunk(
  "tasks/getActiveTasks",
  async () => {
    const res = await taskApi.getActiveTasks();
    console.log("active tasks", res);
    return res;
  }
);

export const createTask = createAsyncThunk("tasks/createTask", async (data) => {
  const res = await taskApi.createTask(data);
  console.log("create task", res);
  return res;
});

export const delTask = createAsyncThunk("tasks/delTask", async (data) => {
  const res = await taskApi.delTask(data);
  //   console.log("del task", res);
  return res;
});
