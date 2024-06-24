import AuthService from '../../services/authService'
export const LOGIN = 'LOGIN'

export const login = (params, history) => dispatch => {
    return AuthService.login(params)
        .then(data => {
            console.log(data);
            dispatch({ type: LOGIN, payload: data });
            history.push('/');
        })
        .catch(err => {
            throw err;
        });
};

export const register = (params, history) => dispatch => {
    return AuthService.register(params)
        .then(data => {
            dispatch({ type: register, payload: data })
            history.push('/')
        })
        .catch(err => {
            throw err
        })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: logout })
}

export const updateProfile = (params) => dispatch => {
    return AuthService.updateProfile(params)
        .then(data => {
            dispatch({ type: updateProfile, payload: data })
        })
        .catch(err => {
            throw err
        })
}
