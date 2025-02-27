import React, { useEffect, useState } from 'react';

function Hello() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        });
        return () => {
            clearInterval(interval);
        }
    }, []);

    function formatTime() {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(meridiem)}`;
    }
    function pad(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <>
            <span>{formatTime()}</span>
        </>
    );

}
export default Hello