import React, { useState } from "react";

const todoItems = () => {
    return (
        <div>
            <ul>
                {items.map(todoItem => (
                    <li>{todoItem}</li>
                ))}
            </ul>
        </div>
    )
}

export default todoItems;