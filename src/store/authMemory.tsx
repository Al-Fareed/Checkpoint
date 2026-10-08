import { createSlice } from "@reduxjs/toolkit";

const authMemorySlice = createSlice({
    name: "authMemory",
    initialState: {
        isAuthenticated: true,
        permissions: [] as string[],
    },
    reducers:{
        login: (state) => {
            state.isAuthenticated = true;
            state.permissions = ["read", "write", "delete"];
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.permissions = [];
        }
    }
})

export const { login, logout } = authMemorySlice.actions;
export default authMemorySlice.reducer;