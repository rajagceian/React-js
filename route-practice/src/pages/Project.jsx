import React from 'react'

const Project = () => {
  return (
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {[1,2,3].map((item) => (
    <div key={item} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-gray-800">Project {item}</h2>
      <p className="text-sm text-gray-500">Short project description</p>
    </div>
  ))}
</div>
  )
}

export default Project
