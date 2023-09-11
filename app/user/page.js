'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function user() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
    fetch('https://www.melivecode.com/api/users')
        .then(res=>res.json())
        .then(result=>{setUsers(result)})
    },[])

    const handleDelete =(id)=>{
        fetch('https://www.melivecode.com/api/users/delete',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({id:id})
        })
        .then(res=>res.json())
        .then(result=>{
            alert(result.message)
                window.location.reload()
    })
    }
  return (
    <div>
        <Link href='/user/create'>Create User</Link>
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    <img src={user.avatar} height={50}  alt={user.username}></img>
                    {user.username}: {user.fname} {user.lname}
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                    <Link href={'/user/edit/'+user.id}>Edit</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
