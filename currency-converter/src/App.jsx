import React, { useEffect, useState } from "react";
import { ArrowDownUp } from "lucide-react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amt, setAmt] = useState("");
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [to, setTo] = useState("INR");
  const [from, setFrom] = useState("USD");

  const rates = useCurrencyInfo(from);

  // Conversion Logic
  useEffect(() => {
    if (amt && rates[to]) {
      setConvertedAmt((amt * rates[to]).toFixed(2));
    } else {
      setConvertedAmt(0);
    }
  }, [amt, to, rates]);

  // Swap Function
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmt(convertedAmt);
    setConvertedAmt(amt);
  };

  const currencyOptions = Object.keys(rates);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">

      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          💱 Currency Converter
        </h2>

        {/* FROM */}
        <div className="space-y-2">
          <label className="text-gray-600 font-medium">From</label>
          <div className="flex gap-3">

            <InputBox label="from" amt={amt} setAmt={setAmt} />

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-1/3 px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              {currencyOptions.map((cur) => (
                <option key={cur}>{cur}</option>
              ))}
            </select>

          </div>
        </div>

        {/* Swap */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg transition transform hover:rotate-180 duration-300"
          >
            <ArrowDownUp />
          </button>
        </div>

        {/* TO */}
        <div className="space-y-2">
          <label className="text-gray-600 font-medium">To</label>
          <div className="flex gap-3">

            <InputBox label="to" convertedAmt={convertedAmt} />

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-1/3 px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              {currencyOptions.map((cur) => (
                <option key={cur}>{cur}</option>
              ))}
            </select>

          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => {}}
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105 active:scale-95"
        >
          Convert {from} to {to} 
        </button>

      </div>
    </div>
  );
};

export default App;