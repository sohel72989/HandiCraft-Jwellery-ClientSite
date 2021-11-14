import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css';
import icon from './../../img/logo/gmail.png';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Please Login</h1>

                <form onSubmit={handleLoginSubmit} >
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div className="form-group">
                                <input className="form-control" onBlur={handleOnBlur} type="email" name="email" placeholder="Email" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-success w-100" type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}

                <p>New User? <Link to="/registration">Registration</Link></p>
                <div>----------Login With----------</div>
                <button onClick={handleGoogleSignIn} className="btn bg-color mt-3 border"><img src={icon} alt="" height="30" />Google Login</button>


            </div>
        </div>
    );
};

export default Login;