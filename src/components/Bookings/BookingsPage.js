import React from "react";
import WeekPicker from "./WeekPicker";

function BookingsPage () {
    return (
        <main className="page-content">
            <p>Bookings!</p>
            <WeekPicker date={new Date()} />    
        </main>
    )
}
export default BookingsPage;