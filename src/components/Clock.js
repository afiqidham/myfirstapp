import React, {useState, useEffect} from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toString())
   

    useEffect(() => {
        console.log("Component mounted / updated");
        const interval = setInterval(showDate, 1000);

        return() => {
            console.log("Cleanup interval");
            clearInterval(interval);
        };
    }, [time]);

    function showDate() {
        // console.log(new Date().toString());
        setTime(new Date().toString());
    }

    return <div>{time}</div>;
}
export default Clock;