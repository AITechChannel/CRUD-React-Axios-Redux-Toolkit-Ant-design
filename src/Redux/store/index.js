import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "../sliceReducer/projectsSlice";
import tasksSlice from "../sliceReducer/tasksSlice";

const store = configureStore({
  reducer: {
    projects: projectsSlice.reducer,
    tasks: tasksSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // to no check warning : A non-serializable value was detected in an action, in the path: `payload.config.adapter`. Value: ƒ xhrAdapter(config) {   return new Promise(function dispatchXhrRequest(resolve, reject) {     var requestData = config.data;     var requestHeaders = config.headers;     var responseType = config.resp…  Take a look at the logic that dispatched this action:
});

export default store;
