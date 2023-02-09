import '../../index.css';
import React, { useState } from "react";
import data from '../../static.json';

function UsersList() {
   const {users} = data;

   const [userIndex, setUserIndex] = useState(0);

   const user = users[userIndex];


   return (
    <div className='flex justify-start'>
         <ul>
            {users.map((user, i) => (
                <li key={user.id}>
                    <button className={i === userIndex ? "selected-btn" : "page-btn"} onClick={() => setUserIndex(i)}>{user.name}</button>
                </li>
            ))}
        </ul>

        {user && (
            <div className='details'>
                <h2 className='bg-blue-400 p-3 text-white font-bold'>{user.name}</h2>
                <div className='p-3 text-white'>
                    <h3 className='border-b mb-2 border-white'>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>
        )}
    </div>
       
    )

}

export default UsersList;