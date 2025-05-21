import React, { useEffect } from "react";

function Github() {
    useEffect(() => {
        fetch()
    }, [])

    // need to use useEffect to make sure 
    return (
        <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">
            Github followers: 
        </div>
    )
}

export default Github