import { configureStore } from "@reduxjs/toolkit";
import authMemorySlice from "./authMemory";

export const memoryStore = configureStore({
  reducer: {
    authMemorySlice,
  },
});

export type RootState = ReturnType<typeof memoryStore.getState>;
export type AppDispatch = typeof memoryStore.dispatch;
