import React, { useState } from "react";
import {bookables, sessions, days} from "../../static.json";
import "../../index.css";
import {FaArrowRight} from "react-icons/fa";
import reducer from './reducer';

const initialState = {
    group: "Room",
    BookableIndex: 0,
    hasDetails: true,
    bookables
}



function BookablesList() {
   
    const [state, action ] = useReducer(reducer, initialState);

    const {group, BookableIndex, bookables,  hasDetails} = state;

    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map(b => b.group))];

    const bookable = bookablesInGroup[BookableIndex];

    function changeGroup(event) {
        setGroup(event.target.value);
        setBookableIndex(0);
    }

    function nextBookable () {
        setBookableIndex(i => (i + 1) % bookablesInGroup.length);
    }

    return (
        <div className="flex justify-start">
                <div className="flex flex-col w-fit">
                    <div className="flex justify-between mb-3">
                        <select value={group} className="mb-2 w-fit m-auto rounded-lg" onChange={changeGroup}>
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
                <div className="details">
                    <div className="min-w-[80%] h-2/5">
                        <div className="bg-blue-400 flex justify-between rounded-t-md p-3 w-full">
                            <h2 className="text-lg font-bold text-white self-center">{bookable.title}</h2>
                            <span className="bg-blue-600 p-2 rounded-md">
                                <label>
                                    <input type="checkbox" className="mr-2" checked={hasDetails} onClick={() => setHasDetails(hasDetails => !hasDetails)} />
                                    Show Details
                                </label>
                            </span>
                        </div>

                        <p className="p-3 text-white">{bookable.notes}</p>

                        {hasDetails && (
                            <div className="">
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
        </div>
        
    )
};

export default BookablesList;
