import React, { useEffect,useState } from 'react'
import {NavLink,useHistory} from 'react-router-dom'
import firebase from'./config'
import $ from 'jquery'
const Navbar = () => {
    const history = useHistory()
    const signout = () =>{
        const auth = firebase.auth()
        localStorage.removeItem('mykey');
        history.push('/login')
        auth.signOut().then(cred =>{
            alert('You Are Logged Out')
        })
    }
    const [selectedItems,setSelectedItems] = useState([])   
    return (
            <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark ">
                <NavLink className="navbar-brand" to="#" style={{marginLeft:'10px'}}>Code Sikho</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center " to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" to="/cart">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" id='videos' to="/video">Videos</NavLink>
                        </li>
                      
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' style={{marginLeft:'10px',fontSize:'20px'}} className="nav-link text-center" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                    <center>
                    <button type="button" class="btn btn-primary" style={{marginTop:'10px',marginRight:'10px',marginBottom:'10px',marginLeft:'5px'}} onClick={signout}>Sign Out</button>
                    </center>
                </div>
            </nav>
    )
}
export default Navbar