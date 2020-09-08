import React, { useState, useEffect } from 'react';
import firebase from './config';
import { Modal, Button } from 'react-bootstrap';

export default function Cart(props) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [item1, setName] = useState()
    var count = -2;
    const [msg, setMsg] = useState(false)

    useEffect(() => {
        const db = firebase.firestore();
        setMsg(true)

        db.collection('add').where('uid', '==', localStorage.getItem('mykey')).onSnapshot(data => {
            setSelectedItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMsg(false)

        })
    }, [])
    const deleete = (id) => {
        const db = firebase.firestore()
        db.collection('add').doc(id).delete()
    }

    const [show, setShow] = useState(false);

    const handleClose = (item) => {
        setShow(false)

    };
    const handleShow = (item) => {
        setShow(true);
        setName(item)

    }
    const [see, setSee] = useState(true);
    const [inpName,setinpName] = useState('')
    const [inpNum,setinpNum] = useState('')
    const [inpExpiry,setinpExpiry] = useState('')
    const [inpCvc,setinpCvc] = useState('')
    const Buy = () => {
        setSee(false)
        const db = firebase.firestore()
        var getCartValue = item1;
        db.collection('Buy')
            .where('name', '==', getCartValue)
            .get().then(async (snapshot) => {
                count = snapshot.docs.length
                if (count == 0) {
                    if(inpName!=='' && inpNum !== '' && inpExpiry !== '' &&inpCvc!=='' )
                   { db.collection('Buy').add({
                        name: item1,
                        orignalName:inpName,
                        uid:localStorage.getItem('mykey')
                    })
                    count = -2
                    setShow(false)
                }
                else{
                    alert('Please Enter All The Fields')
                }
                }
                else {
                    alert("It's Already There")
                }
                setSee(true)

            })
    }

    return (
        <div>
            <div>
                <div className="container-fluid ">
                    <div className="row ">
                        {msg == true ? <h1 className='text-center mt-5'>Please Wait...</h1> : null}
                        {selectedItems.map(item => (


                            <div className="col-lg-4 col-md-6 col-12  card1">
                                <Modal show={show} onHide={handleClose}  {...props}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Buy Course</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><center><input type='text' placeholder='Enter Your Name' value={inpName} onChange={e => setinpName(e.target.value)}/>
                                    <input type='number' placeholder='Enter Your Card Number' value={inpNum} onChange={e => setinpNum(e.target.value)}/>
                                    <input type='date' placeholder='Expiry' value={inpExpiry} onChange={e => setinpExpiry(e.target.value)}/>
                                    <input type='number' placeholder='Enter Your CVC' value={inpCvc} onChange={e => setinpCvc(e.target.value)}/>
                                    </center></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleClose(item)}>
                                            Close
          </Button>
                                        {see == true ? <Button variant="primary" onClick={Buy}>
                                            Check Out
                                     </Button> : <Button variant="primary">
                                                Check Out
                                     </Button>}
                                    </Modal.Footer>
                                </Modal>
                                <div class="card mx-auto mt-5 mb-5" style={{ width: '300px' }}>
                                    <img src={item.uri} class="card-img-top img-fluid" alt="..." style={{ height: '150px', width: '300px' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.text}</p>
                                        <p class="card-text"><span style={{ fontWeight: 'bold' }}>Price</span> {item.price}</p>
                                        <button type="button" class="btn btn-primary" onClick={() => {
                                            handleShow(item.name);
                                        }}>
                                            Buy
                                        </button>
                                        <button class="btn btn-primary ml-3" onClick={() => deleete(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                </div>
            </div>        </div>
    )
}