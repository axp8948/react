import React from "react";

function Card({ description, onDelete, onDone }) {

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <p className="text-gray-600 py-10">Description: {description}</p>
            <button className="bg-red-500 hover:bg-red-800 text-black font-semibold py-2 px-4 mx-2 rounded" onClick = {onDelete}>Delete</button>
            <button className="bg-green-500 hover:bg-green-800 text-white font-semibold py-2 px-4 mx-2 rounded" onClick={onDone}>Done</button>
        </div>

    )
}

export default Card