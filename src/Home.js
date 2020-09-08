import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import firebase from './config';
import { Modal, Button } from 'react-bootstrap';

const Home = (props) => {
    const history = useHistory()
    var count = -2;
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedItems1, setSelectedItems1] = useState([]);
    var count1 = -2;
    const [msg, setMsg] = useState(false)

    useEffect(() => {
        const db = firebase.firestore();
        setMsg(true)
        db.collection('see').onSnapshot(data => {
            setSelectedItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setSelectedItems1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setMsg(false)
        })
    }, [])
    const [see, setSee] = useState(true)
    const ADD = async (item) => {
        setSee(false)
        const db = firebase.firestore()
        const value = localStorage.getItem('mykey')
        var getCartValue1 = item.name;
        db.collection('add')
            .where('name', '==', getCartValue1)
            .where('uid', '==', value)
            .get().then(async (snapshot) => {
                count = snapshot.docs.length
                if (count == 0) {
                    if (value !== null) {
                        history.push('/cart')
                        db.collection('add').add({
                            name: item.name,
                            uri: item.uri,
                            text: item.text,
                            price: item.price,
                            uid: value
                        })
                        count = -2
                    }
                    else {
                        alert('Please Login First')
                    }
                }

                else {
                    alert("It's Already There")
                }
                setSee(true)

            })
    }
    const [search, setSearch] = useState('')
    const ssearch = () => {
        const newData = selectedItems1.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = search.toUpperCase();
            return itemData.indexOf(textData) > -1
        });

        setSelectedItems(newData)
    }
    const [show, setShow] = useState(false);

    const handleClose = (item) => {
        setShow(false)

    };
    const handleShow = (item) => {
        setShow(true);
        setName(item)

    }
    const [item1, setName] = useState()
    const [see1, setSee1] = useState(true);
     const [inpName,setinpName] = useState('')
        const [inpNum,setinpNum] = useState('')
        const [inpExpiry,setinpExpiry] = useState('')
        const [inpCvc,setinpCvc] = useState('')
    const Buy = () => {
       
        setSee1(false)
        const db = firebase.firestore()
        var getCartValue = item1;
        db.collection('Buy')
            .where('name', '==', getCartValue)
            .where('uid', '==', localStorage.getItem('mykey'))
            .get().then(async (snapshot) => {
                count1 = snapshot.docs.length
                if (count1 == 0) {
                    if (localStorage.getItem('mykey') !== null) {
                        if(inpName!=='' && inpNum !== '' && inpExpiry !== '' &&inpCvc!=='' )
                        {db.collection('Buy').add({
                            name: item1,
                            orignalName:inpName,
                            uid: localStorage.getItem('mykey')
                        })
                        count1 = -2
                        setShow(false)}
                        else{
                            alert('Please Enter All The Fields')
                        }
                    }
                }
                else {
                    alert("It's Already There")
                }
                setSee1(true)
            })

    }
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

                <input type="text" class=" mx-auto form-control w-75  mt-5" placeholder="Search Here" value={search} onChange={e => setSearch(e.target.value)} onKeyUp={ssearch} /></div>
            {msg == true ? <h1 className='text-center'>Please Wait...</h1> : null}
            <div className="container-fluid ">
                <Modal show={show} onHide={handleClose} {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Buy Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><center><input type='text' placeholder='Enter Your Name' value={inpName} onChange={e => setinpName(e.target.value)} />
                        <input type='number' placeholder='Enter Your Card Number' value={inpNum} onChange={e => setinpNum(e.target.value)} />
                        <input type='date' placeholder='Expiry' value={inpExpiry} onChange={e => setinpExpiry(e.target.value)} />
                        <input type='number' placeholder='Enter Your CVC' value={inpCvc} onChange={e => setinpCvc(e.target.value)} />
                    </center></Modal.Body>                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose()}>
                            Close
          </Button>
                        {see1 == true ? <Button variant="primary" onClick={Buy}>
                            Check Out
                                     </Button> : <Button variant="primary">
                                Check Out
                                     </Button>}
                    </Modal.Footer>
                </Modal>
                <div className="row ">
                    {selectedItems.map(item => (

                        <div className="col-lg-4 col-md-6 col-12  card1">
                            <div class="card mx-auto mt-5 mb-5" style={{ width: '300px' }}>
                                <img src={item.uri} class="card-img-top img-fluid" alt="..." style={{ height: '150px', width: '300px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.text}</p>
                                    <p class="card-text"><span style={{ fontWeight: 'bold' }}>Price</span> {item.price}</p>
                                    {see == true ? <button class="btn btn-primary" onClick={() => ADD(item)}>Add To Cart</button> : <button class="btn btn-primary" >Add To Cart</button>}
                                    <button class="btn btn-primary ml-3" onClick={() => {
                                        handleShow(item.name);
                                    }}>Buy</button>
                                </div>
                            </div>


                        </div>


                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home