import React, { useState } from "react";

const todoItems = (props) => {
    return (
        <div>
            <li>{props.text}</li>
        </div>
    )
}

export default todoItems;