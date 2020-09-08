import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from './config';

const Profile = () => {

    const [email, setEmail] = useState('');
    const auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
        if (user) {
            setEmail(user.email);
        } else {
            setEmail('Login First');
        }
    });
    return (

        <div >
                <h1 className='text-center mt-5'> You Are Logged In As {email} </h1>
        </div>

    );
}
export default Profile