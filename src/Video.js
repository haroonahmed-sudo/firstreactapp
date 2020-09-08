import React, { useState, useEffect } from 'react'
import firebase from './config';

export default function Video() {
    const [selectedItems, setSelectedItems] = useState([])
    const [msg, setMsg] = useState(true)
    useEffect(() => {
        const db = firebase.firestore();
        db.collection('Buy').where('uid', '==', localStorage.getItem('mykey')).onSnapshot(data => {
            setSelectedItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMsg(false)
        })
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row'>
                {msg == true ? <h1 className='text-center mt-5'>Please Wait...</h1> : null}
                {selectedItems.map(item => (
                    <div className="col-lg-4 col-md-6 col-12  card1">
                        <div class="card mx-auto mt-5 mb-5" style={{ width: '300px' }}>
                            <div class="card-body">
                                <h5 class="card-title">{item.orignalName.toUpperCase()}<br></br>You Will Get Videos Of <br></br>{item.name}<br></br> Soon</h5>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}