import API from './api'

const AuthService = {
    login: async (data) => {
        try {
            const response = await API.post('/login', data);
            setHeadersAndStorage(response.data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    },

    register: async (data) => {
        try {
            const response = await API.post('/register', data);
            setHeadersAndStorage(response.data);
            return response.data;
        } catch (err) {
            handleError(err);
        }
    },

    logout: () => {
        API.defaults.headers['Authorization'] = '';
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    },

    updateProfile: async (data) => {
        const headers = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };
        try {
            const response = await API.post('/users/update', data, headers);
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        } catch (err) {
            handleError(err);
        }
    },
}

const setHeadersAndStorage = ({ user, token }) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

const handleError = (err) => {
    console.error("Auth service error:", err);
    throw err;
}

export default AuthService;
