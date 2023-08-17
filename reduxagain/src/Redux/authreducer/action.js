import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const login = (userDetails) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    return axios.post(`https://reqres.in/api/login`, userDetails)
        .then((res) => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            if (res.data.token) {
                alert("Login Successful")
            }
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILURE })
            console.log(err)
        })
}