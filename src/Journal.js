import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from 'react-select'
import { format } from 'date-fns'
import { BsPlus, BsTrash, BsPencil } from "react-icons/bs";
import { useForm } from "react-hook-form"

// Firebase
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseUrl: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  })
}
const firestore = firebase.firestore()
const userCollection = firestore.collection('users')
const auth = firebase.auth()


// const data = require('./sampleData.json')



export default function Journal() {
  const [firstName, setFirstName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [arriveTime, setArriveTime] = useState('')
    const [departTime, setDepartTime] = useState('')
    const [createAt, setCreateAt] = useState('')
    const [reason, setReason] = useState('')


    async function insertDocument() {
        // insert และคืน document reference
        const documentRef = await userCollection.add({
            firstName,
            phoneNumber,
            arriveTime,
            departTime,
            createAt,
            reason
        })
    
        // ใช้ document reference เข้าถึงค่า document id
        alert(`new document has been inserted as ${ documentRef.id }`)
    }

    return <div>
        {/* ตัวแปร state จะถูกเปลี่ยนค่าเมื่อพิมพ์ข้อมูล และ trigger การ re-render */}
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" value={phoneNumber} onChange={e => setphoneNumber(e.target.value)} />
        <input type="date" value={arriveTime} onChange={e => setArriveTime(e.target.value)} />
        <input type="date" value={departTime} onChange={e => setDepartTime(e.target.value)} />
        <input type="date" value={createAt} onChange={e => setCreateAt(e.target.value)} />
        <input type="text" value={reason} onChange={e => setReason(e.target.value)} />


        <button onClick={insertDocument}>Save</button>
    </div>
}