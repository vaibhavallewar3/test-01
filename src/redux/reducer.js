import { createReducer } from "@reduxjs/toolkit";

const initState = {
    loading: false,
    user: null,
    users: [],
    error: null,
    isAuthenticated: false,
    message: null,
    person: {}
};


export const authReducer = createReducer(initState, (builder) => {
    builder
        .addCase("LOGIN_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("LOGIN_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase("LOGIN_USER_FAIL", (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase("LOAD_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("LOAD_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        })
        .addCase("LOAD_USER_FAIL", (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.user = null;
        })
        .addCase("GET_USERS_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("GET_USERS_SUCCESS", (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase("GET_USERS_FAIL", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("LOGOUT_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("LOGOUT_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.isAuthenticated = false;
        })
        .addCase("LOGOUT_USER_FAIL", (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = true;
        })
        .addCase("CLEAR_ERRORS", (state) => {
            state.error = null;
        })
        .addCase("CLEAR_MESSAGE", (state) => {
            state.message = null;
        })
});

export const personReducer = createReducer(initState, (builder)=>{
    builder
    .addCase("USER_DETAILS_REQUEST", (state) => {
        state.loading = true;
    })
    .addCase("USER_DETAILS_SUCCESS", (state, action) => {
        state.loading = false;
        state.person = action.payload;
    })
    .addCase("USER_DETAILS_FAIL", (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase("CLEAR_ERRORS", (state) => {
        state.error = null;
    })
    .addCase("CLEAR_MESSAGE", (state) => {
        state.message = null;
    })
});