import React from 'react';

export default function About() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 col-12'>
                    <h1 className='text-center mt-3  ' >About Us</h1>
                    <hr className='w-25 mx-auto' />
                    <h1 className='text-center mb-5 ' style={{textAlign:'justify'}}>This Is Just A Project Made By Me.<br></br>I Have Made So Many Projects Like This.<br></br>If You Like It You Can Collaborate With Me.<br></br></h1>
                    <h1 className='text-center  ' >Contact Info</h1>
                    <hr className='w-25 mx-auto' />
                    <h1 className=' text-center' ><span style={{ fontWeight: 'bold' }}>Full Name: </span>Haroon Ahmed.</h1><br></br>
                    <h1 className=' text-center' ><span style={{ fontWeight: 'bold' }}>Phone Number: </span>9866873765.</h1><br></br>
                    <h1 className=' text-center' ><span style={{ fontWeight: 'bold' }}>Gmail: </span>Haroon@theharoon.com.</h1><br></br>
                    <h1 className=' text-center' ><span style={{ fontWeight: 'bold' }}>City: </span>Hyderabad.</h1><br></br>

                </div>
            </div>
        </div>
    )
}