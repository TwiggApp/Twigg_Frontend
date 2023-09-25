import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import menuSlice from "./slices/menuSlice";
import categorySlice from "./slices/categorySlice";
import foodItemSlice from "./slices/foodItemSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  menu: menuSlice.reducer,
  category: categorySlice.reducer,
  food: foodItemSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
