import React, { useState } from "react";
import data from "../../static.json";
import "../../index.css";
import {FaArrowRight} from "react-icons/fa";

function BookablesList() {
    // Destructure the data from the static.json file into an object
    const {bookables} = data;
    const [group, setGroup] = useState("Kit");
    const bookablesInGroup = bookables.filter(b => b.group === group);
    // useState hook to update state
    const [ BookableIndex, setBookableIndex ] = useState(0);
    const groups = [...new Set(bookables.map(b => b.group))];

    function nextBookable () {
        setBookableIndex(i => (i + 1) % bookablesInGroup.length);
    }

    return (
        <div className="flex flex-col w-fit">
            <select value={group} className="mb-2 w-fit m-auto rounded-lg" onChange={(e) => setGroup(e.target.value)}>
                {groups.map(g => <option value={g} key={g}>{g}</option>)}
            </select>
            <ul>
                {bookablesInGroup.map((b, i) => (
                <li key={b.title} >
                    <button className={i === BookableIndex ? "selected-btn" : "page-btn"} onClick={() => setBookableIndex(i)}>{b.title}</button>
                </li>
                ))}
            </ul>

            <button className="border-blue-500 border-2 rounded-lg p-1 flex justify-center items-center justify-self-center w-fit m-auto" onClick={nextBookable} autoFocus>
                <FaArrowRight />
                <span className="icon-space">Next</span>
            </button>
        </div>
    )
};

export default BookablesList;
