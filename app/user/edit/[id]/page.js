'use client'
import React,{useEffect, useState} from 'react'

export default function page({params}) {
    const [user,setUsers]=useState({
        "id": 0,
        "fname": "",
        "lname": "",
        "username": "",
        "email": "",
        "avatar": ""
})
    useEffect(()=>{
        fetch('https://www.melivecode.com/api/users/'+params.id)
        .then(res=>res.json())
        .then(result=>{setUsers(result.user)})
    },[])

    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch('https://www.melivecode.com/api/users/update',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(result=>{
            alert(result.message)
            window.location.href='/user'
    })}


  return (
    <div>
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id="fname"
            name="fname"
            value={user.fname}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,fname:event.target.value
                }))
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            id="lname"
            name="lname"
            value={user.lname}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,lname:event.target.value
                }))
            }}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={user.username}
            onChange={(event)=>{
                setUsers((user)=>({
                    ...user,username:event.target.value
                }))
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
