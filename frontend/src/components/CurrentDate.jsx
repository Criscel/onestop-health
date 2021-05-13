import React from "react";

function CurrentDate() {
    const showdate = new Date();
    const displayCurrentDate = showdate.getDate() + '/' + (showdate.getMonth()+1) + '/' + showdate.getFullYear();

    return(
        <div>
            <input type="text" placeholder={displayCurrentDate} readOnly />
        </div>
    )
}

export default CurrentDate;