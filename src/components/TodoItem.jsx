import React, {useState} from "react";

const todoItems = (props) => {

    return (
        <div onClick={props.onChecked}>
            <li onClick={handleClick} style={{textDecoration: isDone ? "line-through" : "none", cursor: "pointer"}}>{props.text}</li>
        </div>
    )
}

export default todoItems;