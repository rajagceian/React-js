import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [len, setLen] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copyStatus,setCopyStatus] = useState("Copy");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    setCopyStatus("Copy");
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (isNum) str += "0123456789";
    if (isChar) str += "!@#$%^&*()_+{:?}/*>,.";
    for (let i = 1; i <= len; i++) {
      const idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(idx);
    }
    setPassword(pass);
  }, [len, isChar, isNum]);

  const copyToClipboard = useCallback(()=>{
    setCopyStatus("Copied");
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,24);// Selected range
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl space-y-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          🔐 Password Generator
        </h2>

        {/* Password Display */}
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            placeholder="Generated Password"
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 outline-none"
          />
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow" onClick={copyToClipboard}>
            {copyStatus}
          </button>
        </div>

        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Password Length</span>
            <span className="font-semibold">{len}</span>
          </div>
          <input
            type="range"
            min="8"
            max="24"
            value={len}
            className="w-full accent-indigo-500"
            onChange={(e) => {
              setLen(Number(e.target.value));
            }}
          />
        </div>

        {/* Options */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              className="accent-indigo-500"
              onClick={()=>setIsNum((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              className="accent-indigo-500"
              onClick={()=>setIsChar((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
