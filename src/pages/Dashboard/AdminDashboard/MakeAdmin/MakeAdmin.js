import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const makeAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={makeAdminSubmit}>
                <TextField
                    sx={{ width: "50%", m: 1 }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur} /><br />
                <Button sx={{ width: "50%", m: 1 }} variant="contained" type='submit'>Make Admin</Button>
            </form>
            {success && <Alert sx={{ width: "50%", ml: "25%" }} severity="success">Admin Make successful </Alert>}
        </div>
    );
};

export default MakeAdmin;