import { configureStore } from "@reduxjs/toolkit";
import { indexslice } from "./feature";
const store = configureStore({
  reducer: {
    [indexslice.reducerPath]: indexslice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(indexslice.middleware),
});
export default store;
