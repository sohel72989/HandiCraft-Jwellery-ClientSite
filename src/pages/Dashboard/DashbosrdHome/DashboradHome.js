import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboradHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <div>
                <h2>Hello, <span className="text-success"> {user.displayName}</span></h2>
                <h1>Welcome To Your Dashboard !!!</h1>
            </div>
        </div>
    );
};

export default DashboradHome;