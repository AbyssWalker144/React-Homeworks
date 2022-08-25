import React, {useState} from "react";
// eslint-disable-next-line
import stules from "./Counter.scss";



export default function Counter() {
    const [value, setValue] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Increase</button>
        </div>
    )
}
