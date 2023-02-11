import React, { useReducer } from "react";
import data from "../../static.json";
import "../../index.css";
import {FaArrowRight} from "react-icons/fa";
import reducer from './reducer';

const {bookables, sessions, days} = data;

const initialState = {
    group: "Room",
    BookableIndex: 0,
    hasDetails: true,
    bookables
}



function BookablesList() {
   
    const [{group, bookables, BookableIndex, hasDetails}, dispatch ] = useReducer(reducer, initialState);

    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map(b => b.group))];

    const bookable = bookablesInGroup[BookableIndex];

    function changeGroup(e) {
        dispatchEvent({
            type: "SET_GROUP",
            payload: e.target.value
        });
    }

    function changeBookable(selectedIndex) {
        dispatchEvent({
            type: "SET_BOOKABLE",
            payload: selectedIndex
        });


    }

    function nextBookable () {
        dispatchEvent({
            type: "NEXT_BOOKABLE"
        })
    }

    function toggleDetails() {
        dispatchEvent({ type: "TOGGLE_HAS_DETAILS"});
    }

    return (
        <div className="flex justify-start">
                <div className="flex flex-col w-fit">
                    <div className="flex justify-between mb-3">
                        <select value={group} className="mb-2 w-fit m-auto rounded-lg" onChange={changeGroup}>
                        {groups.map(group => <option value={group} key={group}>{group}</option>)}
                        </select>

                        <button className="bg-blue-900 text-white border-2 rounded-lg h-fit p-1 flex justify-center items-center justify-self-center w-fit m-auto" onClick={nextBookable} autoFocus>
                            <FaArrowRight className="p-1"/>
                            <span className="icon-space text-sm font-thin">Next</span>
                        </button>
                    </div>
                
                    <ul>
                        {bookablesInGroup.map((b, i) => (
                        <li key={b.title} >
                        <button className={i === BookableIndex ? "selected-btn" : "page-btn"} onClick={() => changeBookable(i)}>{b.title}</button>
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
                                    <input type="checkbox" className="mr-2" checked={hasDetails} onChange={toggleDetails} />
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
