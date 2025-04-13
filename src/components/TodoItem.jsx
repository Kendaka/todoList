import React, {useState} from "react";

const todoItems = (props) => {

    const [isDone, setIsdone] = useState(false);

    const handleClick = () => {
        setIsdone(prevValue => !prevValue);
    }

    return (
        <div>
            <li onClick={handleClick} style={{textDecoration: isDone ? "line-through" : "none", cursor: "pointer"}}>{props.text}</li>
        </div>
    )
}

export default todoItems;