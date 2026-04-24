import { useNavigate } from "react-router-dom";

const NotExists = () => {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 text-center px-4">

      {/* Big 404 */}
      <h1 className="text-[120px] font-extrabold text-indigo-500 animate-bounce md:text-[180px]  drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page not found 😢
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-lg transition transform hover:scale-105 active:scale-95"
        onClick={()=>{
          navigate("/");
        }}
      >
        Go Home
      </button>

    </div>
  )
}

export default NotExists
