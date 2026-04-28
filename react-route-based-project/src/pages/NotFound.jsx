import React from 'react'
import { useParams,Link } from 'react-router-dom';

const NotFound = () => {
    const {userId} = useParams();
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
        <h1 className='absolute text-white top-30 bg-blue-500 p-5'>path : /user/{userId}</h1>
      <div className="text-center space-y-6">

        {/* Animated 404 */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-indigo-500 animate-bounce">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Animated Button */}
        <Link to="/">        
            <button className="mt-4 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white rounded-xl shadow-lg transition transform hover:scale-105 active:scale-95">
            Go Home
            </button>
        </Link>


        {/* Floating Illustration (optional) */}
        <div className="mt-10 flex justify-center">
          <div className="w-40 h-40 bg-indigo-200 rounded-full flex items-center justify-center animate-pulse shadow-inner">
            <span className="text-4xl">🚀</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound
