import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import taskApi from "../../api/taskApi";
const projectSlice = createSlice({
  name: "projects",
  initialState: {
    status: "idle",
    data: { projects: [], idCurrentProject: "", currentProject: [] },
  },
  // reducers: {
  //   add: (state, action) => {
  //     state.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getAllProject.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getAllProject.fulfilled, (state, action) => {
      state.status = "success";

      state.data.projects.push(...action.payload);

      // const current = state.data.projects.find((e, i) => e.name === "Inbox");
      // state.data.idCurrentProject = current.id;
    });

    builder.addCase(getAllProject.rejected, (state, action) => {
      state.status = "error";
    });

    builder.addCase(getAProject.fulfilled, (state, action) => {
      state.status = "success";

      state.data.currentProject.push(action.payload);
    });
  },
});

export default projectSlice;

export const getAllProject = createAsyncThunk(
  "projects/getAllProject",
  async () => {
    const res = await taskApi.getAllProject();
    console.log("fetch result", res);
    return res;
  }
);

export const getAProject = createAsyncThunk(
  "projects/getAProject",
  async () => {
    const res = await taskApi.getAProject(2293840451);
    console.log("fetch result", res);
    return res;
  }
);
