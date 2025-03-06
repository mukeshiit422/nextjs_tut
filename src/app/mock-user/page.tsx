import { revalidatePath } from 'next/cache';
import React from 'react'

type User ={
    id : number,
    name : string,
}

export default async function MockUser() {
    const res = await fetch("https://67c957a90acf98d07089d928.mockapi.io/users");
    const users = await res.json();

    async function adduser(formData:FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://67c957a90acf98d07089d928.mockapi.io/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });
        revalidatePath('/mock-user')
        const newUser = await res.json();
        console.log("newUser>>",newUser)

    }
    return (
      <div>
        <form action={adduser} className='py-10'>
        <input type='text' name='name'required className='border p-2 mr-2 rounded'/>
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded'> Add user</button>
        </form>
        <div className='grid grid-cols-4 gap-4 py-10'>
            {
                users.map((user : User)=>{
                    return(
                        <div key={user.id} className='p-4 shadow-md rounded-lg bg-white text-gray-700'>
                            {user.name}
                        </div>
                    )
                })
            }
      </div>
  </div>
    )
}
