"use client"
import React, {useState, useEffect} from 'react'

type User ={
    id : number,
    name : string,
    userName : string,
    email : string,
    phone : string
}
export default function UserClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function fetchUsers() {
            try{
              setLoading(true);
              const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
              )
              if(res.ok){
                const data = await res.json();
                setUsers(data);
              } else{
                throw new Error("failed to load")
              }
            } catch{
                setError("Failed to laod");
                console.log("error ",error)
                
            } finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[error])

    if(loading){
      return(
        <p>loading ....</p>
      )
    }
  return (
    <div>
        <ul>
            {
                users.map((user)=>{
                    return(
                        <li key={user.id} className='p-4 m-2 bg-white text-gray-500'>
                            {user.name}-{user.email}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
