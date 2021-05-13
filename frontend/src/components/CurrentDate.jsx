import React from "react";

function currentDate() {
    const showdate = new Date();
    const displayCurrentDate = showdate.getDate()+' '+showdate.getMonth()+' '+showdate.getFullYear();

    return(
        <div>
            <input type="text" value={displayCurrentDate} readOnly />
        </div>
    )
}

export default currentDate;