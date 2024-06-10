import React from 'react'
import loginImage from '../../assets/images/login.svg'
import './Auth.scss'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div id="card-shadow">
                    <div id="image-selection">
                        <img src = {loginImage} alt = "Login"></img>
                    </div>
                    <div id="form-selection">
                        <h2>Welcome Back</h2>
                        <form>
                            <div className="input-field mb-1">
                                <input placeholder="First Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder="Last Name" />
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder="Email" />
                            </div>
                            <div className="input-field mb-1">
                                <select>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="input-field mb-2">
                                <input placeholder="Password" />
                            </div>
                            <button>REGISTER</button>
                        </form>
                        <p>Already Have An Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
