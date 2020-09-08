import React, { useState, useEffect } from 'react';
import firebase from'./config'
import {useHistory} from 'react-router-dom'

export default function Login() {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const login = () =>{
        const auth = firebase.auth()
        auth.signInWithEmailAndPassword(email,pass).then(cred =>{
            localStorage.setItem('mykey',cred.user.uid);
            history.push('/')

            setEmail('')
            setPass('')
        }).catch(error =>{
            alert(error)
        })
    }
    return (
        <div >
            <form >

                <div class="container">                    <center>

                    <label for="uname"><b>Username</b></label><br/>
                    <input type="text" placeholder="Enter Username" name="uname" required value={email} onChange={e => setEmail(e.target.value)} autoComplete='off'/>
                    <br/>
                    <label for="psw"><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" name="psw" required value={pass} onChange={e => setPass(e.target.value)} autoComplete='off'/>
                    <br/>
                        <input type='button' value='Login' className='bbtn' onClick={login}/>
                    </center>
                </div>
            </form>

        </div>
    )
}