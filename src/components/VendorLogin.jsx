import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VendorRegistration from './VendorRegistration';

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
        <div className='bg-dark text-light'>
        <div className='container Sections'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='bg-dark text-light p-4'>
                        <h2 className='text-center'>Vendor Login</h2>
                        <div className='mb-3'>
                            <label htmlFor="userID" className='form-label'>User ID</label>
                            <input
                                type="text"
                                className='form-control'
                                id="userID"
                                value={userID}
                                onChange={handleUserIDChange}
                                placeholder="Enter User ID"
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input
                                type="password"
                                className='form-control'
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className='text-center'>
                        <button onClick={handleSubmit} className='btn btn-outline-success align w-50'>
                            Submit
                        </button>
                        </div>
                        <p className='mb-5 mt-3 '> Create a account ?
                        <Link to= "/register" element={<VendorRegistration />}> Click here to register </Link> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default VendorLogin;
