import React, { useState } from "react";

const todoItems = (props) => {
    return (
        <div>
            <li>{props.todoItem}</li>
        </div>
    )
}

export default todoItems;