import React, { useState, useEffect } from 'react'

/* โค้ดการเรียกใช้ firebaseApp */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firestore = firebase.firestore()
const userCollection = firestore.collection('users')

export default function Delete() {
    /* โค้ด realtime subscription */

    const [ users, setUsers ] = useState({})

    useEffect(() => {
        // subscription นี้จะเกิด callback กับทุกการเปลี่ยนแปลงของ collection users
        const unsubscribe = userCollection.onSnapshot(ss => {
            // ตัวแปร local
            const users = {}

            ss.forEach(document => {
                // manipulate ตัวแปร local
                users[document.id] = document.data()
            })

            // เปลี่ยนค่าตัวแปร state
            setUsers(users)
        })

        return () => {
            // ยกเลิก subsciption เมื่อ component ถูกถอดจาก dom
            unsubscribe()
        }
    }, [])

    async function deleteDocument(id) {
        // ประกาศตัวแปรเพื่ออ้างอิงไปยัง document ที่จะทำการลบ
        const documentRef = userCollection.doc(id)
        // ลบ document
        await documentRef.delete()

        alert(`document ${ id } has been deleted`)
    }

    return <div>
        { Object.keys(users).map(id => {
            return <button key={ id } onClick={ () => deleteDocument(id) }>Delete { id }</button>
        }) }
    </div>
}
    