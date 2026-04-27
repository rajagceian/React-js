import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const App = () => {
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchPics() {
      setLoading(true);
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`,
      );
      setPics(res.data);
      setLoading(false);
    }
    fetchPics();
  }, [page]);

return (
  <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 p-4 md:p-8">
    
    {/* Header */}
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      📸 My Gallery
    </h1>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

      {loading
        ? Array(15).fill(0).map((_, idx) => (
            <div
              key={idx}
              className="h-40 md:h-48 rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full shimmer"></div>
            </div>
          ))
        : pics.map((picInfo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <img
                src={picInfo.download_url}
                alt="gallery"
                className="w-full h-40 md:h-48 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm md:text-base font-semibold">
                  View Image
                </p>
              </div>
            </div>
          ))}
    </div>

    {/* Pagination */}
<div className="mt-6 flex items-center justify-center gap-6">

  {/* Left Arrow */}
  <button
    disabled={page === 1}
    className={`p-3 rounded-full shadow-md transition transform 
      ${page === 1 
        ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
        : "bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-110 active:scale-95"
      }`}
    onClick={() => {
      if (page > 1) setPage(prev => prev - 1);
    }}
  >
    <ArrowBigLeft size={32} />
  </button>

  {/* Page Indicator */}
  <div className="px-5 py-2 bg-indigo-500 text-white rounded-xl shadow font-semibold text-lg">
    Page {page}
  </div>

  {/* Right Arrow */}
  <button
    className="p-3 rounded-full shadow-md bg-white text-indigo-600 hover:bg-indigo-100 hover:scale-110 active:scale-95 transition transform"
    onClick={() => {
      setPage(prev => prev + 1);
    }}
  >
    <ArrowBigRight size={32} />
  </button>

</div>

  </div>
);
};

export default App;
