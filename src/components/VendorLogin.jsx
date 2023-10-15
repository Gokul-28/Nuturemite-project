import React, { useState } from 'react';
import Navbar from './Navbar';

const VendorLogin = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleUserIDChange = (event) => {
        setUserID(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('User ID:', userID);
        console.log('Password:', password);
    };

    return (
        <>
        <div className='Sections bg-dark'>
       
        <div className='justify-content-center Section bg-dark text-light '>
            <h2>Vendor Login</h2>
            <div>
                <label htmlFor="userID">User ID:</label>
                <input
                    type="text"
                    id="userID"
                    value={userID}
                    onChange={handleUserIDChange}
                    placeholder="Enter User ID"
                    
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                   
                />
            </div>
            <button onClick={handleSubmit} className='btn btn-outline-success'>
                Submit
            </button>
        </div>
        </div>
        </>
    );
};

export default VendorLogin;
