import '../../index.css';
import React, { useState } from "react";
import data from '../../static.json';

function UsersList() {
   const {users} = data;

   const [userId, setUserId] = useState(1)

   return (
        <ul>
            {users.map((user, i) => (
                <li key={user.id}>
                    <button className={i === userId ? "selected-btn" : "page-btn"} onClick={() => setUserId(i)}>{user.name}</button>
                </li>
            ))}
        </ul>
    )

}

export default UsersList;