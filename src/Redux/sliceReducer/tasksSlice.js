import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    status: { getActiveTasks: "idle", delTask: "idle", createTask: "idle" },
    activeTasksServer: [],
    activeTasksUi: [],
  },
  reducers: {
    add: (state, action) => {
      state.activeTasksUi.push(action.payload);
    },
    delete: (state, action) => {
      state.activeTasksUi.splice(
        state.activeTasksUi.findIndex((e, i) => e.id === action.payload),
        1
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getActiveTasks.pending, (state, action) => {
      state.status.getActiveTasks = "loading";
    });

    builder.addCase(getActiveTasks.fulfilled, (state, action) => {
      state.status.getActiveTasks = "success";

      state.activeTasksServer = action.payload;
      state.activeTasksUi = action.payload;
    });

    builder.addCase(getActiveTasks.rejected, (state, action) => {
      state.status.getActiveTasks = "error";
    });
    //------------------------------------------------------------
    builder.addCase(createTask.pending, (state, action) => {
      state.status.createTask = "loading";
    });

    builder.addCase(createTask.fulfilled, (state, action) => {
      state.status.createTask = "success";
    });

    builder.addCase(createTask.rejected, (state, action) => {
      state.status.createTask = "error";
    });
    //------------------------------------------------------------
    builder.addCase(delTask.pending, (state, action) => {
      state.status.delTask = "loading";
    });

    builder.addCase(delTask.fulfilled, (state, action) => {
      state.status.delTask = "success";
    });

    builder.addCase(delTask.rejected, (state, action) => {
      state.status.delTask = "error";
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
