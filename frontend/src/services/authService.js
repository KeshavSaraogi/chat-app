import api from './api'

const authService = {
    login: (data) => {
        return api.post('/login', data)
        .then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`
            return data
        })
        .catch(err => {
            console.log("Authentication Service Error", err)
            throw err
        })
    }, 

    register: (data) => {return api.post('/register', data)
    .then(({data}) => {
        API.defaults.headers['Authorization'] = `Bearer ${data.token}`
        return data
    })
    .catch(err => {
        console.log("Authentication Service Error", err)
        throw err
    })},

    logout: (data) => {}
}

export default authService  