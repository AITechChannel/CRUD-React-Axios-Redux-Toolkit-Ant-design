import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    status: {
      getActiveTasks: "idle",
      delTask: "idle",
      createTask: "idle",
      updateTask: "idle",
    },
    activeTasksServer: [],
    activeTasksUi: [],
  },
  reducers: {
    add: (state, action) => {
      state.activeTasksUi.push(action.payload);
    },
    delete: (state, action) => {
      // state.activeTasksUi.splice(
      //   state.activeTasksUi.findIndex((e, i) => e.id === action.payload),
      //   1
      // );

      const afterDel = state.activeTasksUi.filter(
        (e, i) => e.id !== action.payload
      );
      state.activeTasksUi = afterDel;
    },
    update: (state, action) => {
      // const indexUpdate = state.activeTasksUi.findIndex(
      //   (e, i) => e.id === action.payload.idEdit
      // );
      // state.activeTasksUi[indexUpdate] = action.payload.contentEdit;

      const { id, content, description } = action.payload;
      console.log({ id, content, description });

      const currentEdit = state.activeTasksUi.find((e, i) => e.id === id);
      console.log(currentEdit);

      if (currentEdit) {
        currentEdit.content = content;
        currentEdit.description = description;
      }
      // return action.payload;
    },
    toggle: (state, action) => {
      const todo = state.activeTasksUi.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.completed = !todo.completed;
      }
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
    //------------------------------------------------------------
    builder.addCase(updateTask.pending, (state, action) => {
      state.status.updateTask = "loading";
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.status.updateTask = "success";
    });

    builder.addCase(updateTask.rejected, (state, action) => {
      state.status.updateTask = "error";
    });
  },
});

export default tasksSlice;

export const getActiveTasks = createAsyncThunk(
  "tasks/getActiveTasks",
  async () => {
    const res = await taskApi.getActiveTasks();
    return res;
  }
);

export const createTask = createAsyncThunk("tasks/createTask", async (data) => {
  const res = await taskApi.createTask(data);
  return res;
});

export const delTask = createAsyncThunk("tasks/delTask", async (data) => {
  const res = await taskApi.delTask(data);
  return res;
});

export const updateTask = createAsyncThunk("tasks/updateTask", async (data) => {
  const res = await taskApi.updateTask(data);
  return res;
});
