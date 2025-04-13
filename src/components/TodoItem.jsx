import React from "react";

const todoItems = (props) => {

    return (
        <div onClick={() => {props.onChecked(props.id)}}  >
            <li>{props.text}</li>
        </div>
    )
}

export default todoItems;