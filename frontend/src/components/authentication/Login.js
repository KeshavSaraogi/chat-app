import React from 'react'
import loginImage from '../../assets/images/login.svg'
import './Auth.scss'

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
                                <input placeholder="Email" />
                            </div>
                            <div className="input-field mb-2">
                                <input placeholder="Password" />
                            </div>

                            <button>LOGIN</button>
                        </form>
                        <p>Dont Have An Account? Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
