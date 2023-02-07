import React from "react";
import '../../index.css';
import data from '../../static.json';

function UserPicker () {

    const {users} = data;

    return (
        <select className='h-fit rounded-md self-center mr-4'>
            {users.map((user, i) => (
                <option key={user.id} className="m-0 p-0">{user.name}</option>
                )
            )}
        </select>
    )
}
export default UserPicker;