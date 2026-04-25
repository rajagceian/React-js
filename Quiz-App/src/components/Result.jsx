import React from "react";

const ResultCard = ({ attempted, correct, wrong, score, onRestart, close }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-3xl shadow-xl text-center w-75">

        <h2 className="text-xl font-bold mb-4">🎉 Result</h2>

        <p>Attempted: {attempted}</p>
        <p className="text-green-600">Correct: {correct}</p>
        <p className="text-red-500">Wrong: {wrong}</p>
        <p className="font-bold mt-2">Score: {score}</p>

        <div className="flex gap-3 justify-center mt-4">
          <button
            onClick={onRestart}
            className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
          >
            Restart
          </button>

          <button
            onClick={close}
            className="bg-gray-300 px-4 py-2 rounded-xl"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;