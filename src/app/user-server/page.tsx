import React from 'react'
type User ={
    id : number,
    name : string,
    userName : string,
    email : string,
    phone : string
}
export default async function UserServer() {
  // to check loading page
  //await new Promise((res)=> setTimeout(res,2000)); 
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
    <ul>
        {
            users.map((user : User)=>{
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
