import React, { useState } from "react";
import data from "../../static.json";
import "../../index.css";

function BookablesList() {
    // Destructure the data from the static.json file into an object
    const {bookables} = data;
    // create a variable to store the value of the Rooms ID in the static.json file
    const group = "Rooms";
    // Create an array of the values that belong to the group 'Rooms'
    const bookablesInGroup = bookables.filter(b => b.group === group);
    
    // useState hook to update state
    const [ BookableIndex, setBookableIndex] = useState(1);

    return (
        <ul className="bookables">
            {bookablesInGroup.map((b, i) => (
                <li key={b.title} className={i === BookableIndex ? "selected-btn" : null}>
                    <button className="btn" onClick={() => setBookableIndex(i)}>{b.title}</button>
                </li>
            ))}
        </ul>
    )
};

export default BookablesList;
