import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/axp8948')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    // need to use useEffect to make sure fetch is executed only after the component is loaded
return (
  <div className="max-w-md mx-auto my-8 bg-gray-600 text-white rounded-xl shadow-lg p-6 text-center space-y-6">
    <h2 className="text-3xl font-bold text-white">GitHub Followers</h2>
    <p className="text-4xl font-semibold text-white">{data.followers}</p>

    <div className="flex flex-col items-center">
      <p className="mb-2 text-lg text-white">GitHub Avatar</p>
      <div className="overflow-hidden rounded-full shadow-md transition-transform duration-300 hover:scale-105 w-32 h-32 border-4 ">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);


}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/axp8948')
    return response.json()
}