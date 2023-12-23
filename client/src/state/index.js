import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "dark",
    userId: "30385805770"  //test
}

export const golbalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {

        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
})

export const { setMode, setUser, setError, logout } = golbalSlice.actions;
export default golbalSlice.reducer;

