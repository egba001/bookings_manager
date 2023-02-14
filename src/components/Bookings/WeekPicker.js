import React, { useReducer } from "react";
import weekReducer from "./weekReducer";
import { getWeek } from "../../utils/date-wrangler";

export default function WeekPicker({date}) {
    const [week, dispatch] = useReducer(weekReducer, date, getWeek);

    return (
        <div>
            <>
                <button onClick={() => dispatch({type: "PREV_WEEK"})}>Previous</button>
                <button onClick={() =>  dispatch({type: "TODAY"})}>Today</button>
                <button onClick={() => dispatch({type: "NEXT_WEEK"})}>Next</button>
            </>
            
            <date>
                {week.start.toDateString()} - {week.end.toDateString()}
            </date>
            
        </div>
    )
}