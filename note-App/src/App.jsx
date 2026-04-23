import React, { useEffect, useState } from 'react'
import { Pencil } from 'lucide-react';

const App = () => {
  const [title,setTitle] = useState("");
  const [details,setDetails] = useState("");
  const [tasks,setTasks] = useState([]);
  const [editIdx, setEditIdx] = useState(null);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("notes") || "[]");
    setTasks(savedTasks);
  }, []); // [] => Load from localStorage (only once)

  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(tasks));
  }, [tasks]); // [tasks] => Save to localStorage whenever tasks change

  function gettingValue(e){
    setTitle(e.target.value);
  }

  function gettingDetails(e){
    setDetails(e.target.value);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col md:flex-row">

      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white/70 backdrop-blur-lg shadow-xl p-4 md:p-5 flex flex-col md:rounded-r-3xl">
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4 md:mb-6">📝 Notes</h1>

        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl mb-4 md:mb-5 transition">
          + New Note
        </button>

        <div className="space-y-3 overflow-y-auto max-h-60 md:max-h-full">
          {tasks.map((ele,idx) => (
            <div
              key={idx}
              className="relative p-3 rounded-xl bg-white hover:bg-indigo-100 shadow-sm transition"
            >
              <button
                className="absolute top-2 right-10 p-1 rounded-full cursor-pointer hover:bg-green-500 text-gray-400 hover:text-black-500 transition"
                onClick={()=>{
                  setTitle(tasks[idx].title);
                  setDetails(tasks[idx].details);
                  setEditIdx(idx);
                }}
              ><Pencil /></button>
                
              
              <button
                className="absolute top-2 right-2 p-1 rounded-full cursor-pointer hover:bg-red-500 text-gray-400 hover:text-red-500 transition"
                onClick={()=>{
                 // e.stopPropagation();
                  const copytasks = [...tasks];
                  copytasks.splice(idx,1);
                  setTasks(copytasks);
                }}
              >
                🗑️
              </button>

              <h2 className="font-semibold text-gray-800 text-sm md:text-base">{ele.title}</h2>
              <p className="text-xs md:text-sm text-gray-500 truncate">
                {ele.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Section */}
      <div className="flex-1 p-4 md:p-8 flex items-center justify-center">

        <form
          className="w-full max-w-full md:max-w-3xl bg-white/70 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl space-y-4 md:space-y-6"
          onSubmit={(e)=>{
            e.preventDefault();
            if (!title.trim() || !details.trim()) return;
            if(editIdx != null){
              const updatedTask = [...tasks];
              updatedTask[editIdx]={title,details};
              setTasks(updatedTask);
              setEditIdx(null);
            } else{
              setTasks([...tasks, { title, details }]);
            }
            setTitle('');
            setDetails('');
          }}
        >

          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Create / Edit Note
          </h2>

          {/* Title */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm md:text-base">Title</label>
            <input
              type="text"
              placeholder="Enter note title..."
              className="w-full px-3 md:px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-sm md:text-base"
              value={title}
              onChange={(e)=>gettingValue(e)}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm md:text-base">Content</label>
            <textarea
              rows="5"
              placeholder="Write your note..."
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none resize-none text-sm md:text-base"
              value={details}
              onChange={(e)=>gettingDetails(e)}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
            <button
              type="reset"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-xl text-sm md:text-base"
              onClick={()=>{
                setTitle('');
                setDetails('');
              }}
            >
              Clear
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md text-sm md:text-base"
            >
              Save Note
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App