import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return (
        <div className="bg-gray-500 text-white text-3xl py-2 my-2 ">
            User: {userid}
        </div>
    )
}


export default User