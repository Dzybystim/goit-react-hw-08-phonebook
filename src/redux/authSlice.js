import { createSlice } from "@reduxjs/toolkit";
import {register, logIn, logOut, fetchCurrentUser} from "./operations"

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isModalOpen: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
           state.user = action.payload.user;
           state.token = action.payload.token;
           state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         },
         [logOut.fulfilled](state, action) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
         },
         [fetchCurrentUser.pending](state, action) {
            state.isRefreshing = true;
         },
         [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLoggedIn = true;
            state.isRefreshing = false;
         },
         [fetchCurrentUser.rejected](state) {
            state.isRefreshing = false;
         }
    },
})

export  const authReducer = authSlice.reducer;