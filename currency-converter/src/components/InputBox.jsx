import React from "react";

const InputBox = ({ label, amt, setAmt, convertedAmt }) => {
  return (
    <input
      type="number"
      placeholder="0"
      className="w-2/3 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 outline-none"
      value={label === "to" ? convertedAmt : amt || ""}
      disabled={label === "to"}
      onChange={(e) => {
        if (label !== "to") {
          setAmt(Number(e.target.value));
        }
      }}
    />
  );
};

export default InputBox;