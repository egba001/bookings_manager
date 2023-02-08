import React, { useState, Fragment } from "react";
import data from "../../static.json";
import "../../index.css";
import {FaArrowRight} from "react-icons/fa";

function BookablesList() {
    // Destructure the data from the static.json file into an object
    const {bookables, sessions, days} = data;
    const [group, setGroup] = useState("Kit");
    const bookablesInGroup = bookables.filter(b => b.group === group);
    // useState hook to update state
    const [ BookableIndex, setBookableIndex ] = useState(0);
    const groups = [...new Set(bookables.map(b => b.group))];

    const bookable = bookablesInGroup[BookableIndex];

    const [hasDetails, setHasDetails] = useState(false);

    function nextBookable () {
        setBookableIndex(i => (i + 1) % bookablesInGroup.length);
    }

    return (
        <Fragment>
                <div className="flex flex-col w-fit">
                    <div className="flex justify-between mb-3">
                        <select value={group} className="mb-2 w-fit m-auto rounded-lg" onChange={(e) => setGroup(e.target.value)}>
                        {groups.map(g => <option value={g} key={g}>{g}</option>)}
                        </select>

                        <button className="bg-blue-900 text-white border-2 rounded-lg h-fit p-1 flex justify-center items-center justify-self-center w-fit m-auto" onClick={nextBookable} autoFocus>
                            <FaArrowRight className="p-1"/>
                            <span className="icon-space text-sm font-thin">Next</span>
                        </button>
                    </div>
                
                    <ul>
                        {bookablesInGroup.map((b, i) => (
                        <li key={b.title} >
                        <button className={i === BookableIndex ? "selected-btn" : "page-btn"} onClick={() => setBookableIndex(i)}>{b.title}</button>
                        </li>
                        ))}
                    </ul>
                </div>
            
                {bookable && (
                <div className="">
                    <div className="">
                        <div className="">
                            <h2>{bookable.title}</h2>
                            <span>
                                <label>
                                    <input type="checkbox" checked={hasDetails} onChange={() => setHasDetails(hasDetails => !hasDetails)} />
                                    Show Details
                                </label>
                            </span>
                        </div>

                        <p>{bookable.notes}</p>

                        {hasDetails && (
                            <div className="items-details">
                                <h3>Availability</h3>
                                <div    className="bookable-availability">
                                    <ul>
                                        {bookables.days.sort().map(d => <li key={d}>{days[d]}</li>)}
                                    </ul>
                                    <ul>
                                        {bookable.sessions.map(s => <li key={s}>{sessions[s]}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Fragment>
        
    )
};

export default BookablesList;
