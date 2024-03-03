import axios from "axios";



export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_USER_REQUEST" });

        const { data } = await axios.post(`/api/v1/user/login`, { email, password }, { headers: { "Content-Type": "application/json" } });
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: data.user });
    } catch (error) {
        dispatch({ type: "LOGIN_USER_FAIL", payload: error.response.data.message });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" });

        const { data } = await axios.get(`/api/v1/user/details`);
        dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
    } catch (error) {
        dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_USERS_REQUEST" });

        const { data } = await axios.get(`/api/v1/user/get`);
        dispatch({ type: "GET_USERS_SUCCESS", payload: data.users });
    } catch (error) {
        dispatch({ type: "GET_USERS_FAIL", payload: error.response.data.message });
    }
};

export const userDetails = (id) =>async(dispatch)=>{
    try {
        dispatch({ type: "USER_DETAILS_REQUEST" });

        const { data } = await axios.get(`/api/v1/user/get/${id}`);
        dispatch({ type: "USER_DETAILS_SUCCESS", payload: data.person });
    } catch (error) {
        dispatch({ type: "USER_DETAILS_FAIL", payload: error.response.data.message });
    }
};

export const logoutUser = () => async(dispatch)=>{
    try {
        dispatch({ type: "LOGOUT_USER_REQUEST" });

        const { data } = await axios.get(`/api/v1/user/logout`);
        dispatch({ type: "LOGOUT_USER_SUCCESS", payload: data.message });
    } catch (error) {
        dispatch({ type: "LOGOUT_USER_FAIL", payload: error.response.data.message });
    }
};