import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData();
    // const [data,SetData] = useState({});
    // useEffect(()=>{
    //     async function fecthData(){
    //         const res = await axios.get("https://api.github.com/users/rajagceian");
    //         console.log(res.data)
    //         SetData(res.data);
    //     }
    //     fecthData()
    // },[]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 space-y-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center">

          {/* Avatar */}
          <img
            src={data.avatar_url}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md hover:scale-105 transition duration-300"
          />

          {/* Name */}
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {data.name}
          </h2>

          {/* Username */}
          <p className="text-gray-500">@{data.login}</p>

          {/* Bio */}
          <p className="mt-2 text-sm text-gray-600">
            {data.bio}
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center gap-4">

          <div className="bg-gray-100 p-3 rounded-xl shadow-sm hover:bg-indigo-100 transition">
            <p className="text-lg font-bold text-gray-800">{data.public_repos}</p>
            <p className="text-xs text-gray-500">Repos</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl shadow-sm hover:bg-indigo-100 transition">
            <p className="text-lg font-bold text-gray-800">{data.followers}</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl shadow-sm hover:bg-indigo-100 transition">
            <p className="text-lg font-bold text-gray-800">{data.following}</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>

        </div>

        {/* Info Section */}
        <div className="space-y-2 text-sm text-gray-700">

          <p>📍 {data.location}</p>
          <p>🔗 <a href="https://github.com/rajagceian" placeholder="Link" target="_blank">
           {data?.html_url?.replace("https://","")}
          </a></p>
          <p>🏢 Linux Foundation</p>

        </div>

        {/* Button */}
        <Link to="/">
            <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md transition transform hover:scale-105">
            Home
            </button>        
        </Link>


      </div>
    </div>
  );

}

export default Github;
