import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../sliceReducer/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
