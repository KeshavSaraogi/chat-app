import authService from '../../services/authService';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER'

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
