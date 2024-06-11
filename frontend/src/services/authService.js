import api from './api'

const authService = {
    login: (data) => {
        return api.post('/login', data)
        .then(({data}) => {
            api.defaults.headers['Authorization'] = `Bearer ${data.token}`
            return data
        })
        .catch(err => {
            console.log("Authentication Service Error", err)
            throw err
        })
    }, 

    register: (data) => {return api.post('/register', data)
    .then(({data}) => {
        api.defaults.headers['Authorization'] = `Bearer ${data.token}`
        return data
    })
    .catch(err => {
        console.log("Authentication Service Error", err)
        throw err
    })},

    logout: (data) => {
        api.defaults.headers['Authrization'] = ``
        localStorage.removeItem(`user`)
        localStorage.removeItem(`token`)
    },

    updateProfile: (data) => {
        const headers = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        return api.post('/users/update', data, headers)
            .then(({ data }) => {
                localStorage.setItem('user', JSON.stringify(data))
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    }
}

const setHeadersAndStorage = ({ user, token }) => {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default authService  