import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo/logo.png'


const Header = () => {
    const { user, logout } = useAuth();

    const activeStyle = {
        color: "slategray",
    }
    return (
        <div className="text-start" style={{ marginBottom: '0px' }}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#243238" }}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top pt-2"
                            alt="React Bootstrap logo"
                        />
                        <h1 className="text-bold d-inline" style={{
                            color: "lightgreen",
                            fontWeight: "bold",
                        }}>
                            JWELLERY.COM</h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontWeight: "bold" }}>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{
                                    color: "teal"
                                }} activeStyle={activeStyle} aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{
                                    color: "teal"
                                }} activeStyle={activeStyle} aria-current="page" to="/allProducts">More Products</NavLink>
                            </li>
                            {user?.email && <li className="nav-item">
                                <NavLink className="nav-link " style={{
                                    color: "teal"
                                }} activeStyle={activeStyle} aria-current="page" to="/dashboard">Dashboard</NavLink>
                            </li>}
                        </ul>
                        {user?.email ?
                            <span className="navbar-text">
                                <span style={{ color: "#FDF3F4" }}>{user?.displayName}</span>
                                <img className="rounded-circle ms-2" style={{ width: "40px" }} src={user.photoURL} alt="" />
                                <button onClick={logout} className="btn btn-success ms-2">LogOut</button>
                            </span>
                            :
                            <span className="navbar-text">
                                <NavLink className="" aria-current="page" to='/login'><button className="btn btn-success">Login</button></NavLink>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;