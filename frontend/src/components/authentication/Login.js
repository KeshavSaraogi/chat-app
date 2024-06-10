import React, {useState} from 'react'
import loginImage from '../../assets/images/login.svg'
import './Auth.scss'
import {Link} from 'react-router-dom'
import authService from '../../services/authService'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/auth'

const Login = ({history}) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('john.doe@gmail.com');
    const [password, setPassword] = useState('secret');

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(login({email, password}, history))

        //props.history
        
        // authService
        // .login({email, password})
        // .then(res => console.log(res))

        // axios.post('http://127.0.0.1:3000/login', { email, password })
        //     .then(res => {
        //         console.log("res", res);
        //     })
        //     .catch(err => {
        //         console.log("err", err);
        //     });

        // console.log({ email, password });
    };

    return (
        <div id="auth-container">
            <div id="auth-card">
                <div id="card-shadow">
                    <div id="image-selection">
                        <img src = {loginImage} alt = "Login"></img>
                    </div>
                    <div id="form-selection">
                        <h2>Welcome Back</h2>
                            <form onSubmit={submitForm}>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Email" 
                                />
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    placeholder="Password" 
                                />
                                <button type="submit">Login</button>
                            </form>
                        <p>Dont Have An Account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
