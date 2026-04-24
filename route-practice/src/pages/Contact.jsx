import React from 'react'

const Contact = () => {
  return (
<div className="mt-8 max-w-md space-y-4">
  <input className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Your Name" />
  <input className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Email" />
  <textarea className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Message"></textarea>
  <button className="w-full py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition">
    Send Message
  </button>
</div>
  )
}

export default Contact
