import { createSlice } from "@reduxjs/toolkit";

const authMemorySlice = createSlice({
    name: "authMemory",
    initialState: {
        isAuthenticated: false,
        permissions: [],
    },
    reducers:{
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = authMemorySlice.actions;
export default authMemorySlice.reducer;