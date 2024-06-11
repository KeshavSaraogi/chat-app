import authService from '../../services/authService';
import { LOGIN, REIGSTER, LOGOUT, UPDATE_PROFILE } from '../types/index'

export const login = (params, history) => dispatch => {
    return authService
        .login(params)
        .then(res => {
            const data = res.data;
            console.log(data);
            dispatch({ type: LOGIN, payload: data });
            history.push('/')
        })
        .catch(err => {
            console.error("Login error:", err);
        });
};

export const register = (params, history) => dispatch => {
    return authService
        .register(params)
        .then(res => {
            const data = res.data;
            console.log(data);
            dispatch({ type: REGISTER, payload: data });
            history.push('/')
        })
        .catch(err => {
            console.error("Login error:", err);
        });
};

export const logout = () => dispatch => {
    authService.logout()
    dispatch({type: LOGOUT})
}

export const updateProfile = (params) => dispatch => {
    return authService.updateProfile(params)
        .then(data => {
            dispatch({ type: UPDATE, payload: data })
        })
        .catch(err => {
            throw err
        })
}