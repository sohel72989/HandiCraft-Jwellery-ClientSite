import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const { user, registerUser, loading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);

    }
    const handleLoginSubmit = e => {

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Create An Account</h1>

                <form onSubmit={handleLoginSubmit}>
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div className="form-group">
                                <input className="form-control" onBlur={handleOnBlur} type="text" name="name" placeholder="Full Name" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handleOnBlur} type="email" name="email" placeholder="Email" required />
                            </div><br />
                            <div className="form-group">
                                <input className="form-control" onBlur={handleOnBlur} type="password" name="password" placeholder="Password" required />
                                <p className="text-danger"></p>
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-success w-100" type="submit">Registration</button>
                            </div>
                        </div>
                    </div>
                </form>
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}

                <p>Already Have an Account? <Link to="/login">Login</Link></p>

            </div>
        </div>
    );
};

export default Registration;















