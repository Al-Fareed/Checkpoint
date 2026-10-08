import { configureStore } from "@reduxjs/toolkit";
import authMemorySlice from "./authMemory";

export const memoryStore = configureStore({
    reducer: authMemorySlice
})