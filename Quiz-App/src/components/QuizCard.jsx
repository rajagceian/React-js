import React, { useEffect, useState } from "react";

const QuizCard = ({
  element,
  index,
  answers,
  setAnswers,
  setScore,
  setCorrect,
}) => {

  const [options, setOptions] = useState([]);

  const cleanQuestion = decodeHTML(element.question);
  const ans = decodeHTML(element.correct_answer);

  const selected = answers[index];

  // ✅ shuffle once per question
  useEffect(() => {
    const shuffled = shuffleArray([
      ...element.incorrect_answers,
      element.correct_answer,
    ]).map(opt => decodeHTML(opt));

    setOptions(shuffled);
  }, [element]);

  const handleClick = (opt) => {
    if (answers[index]) return;

    setAnswers(prev => ({
      ...prev,
      [index]: opt
    }));

    if (opt === ans) {
      setScore(prev => prev + 1);
      setCorrect(prev => prev + 1);
    } else {
      setScore(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl">

        <h2 className="text-xl font-bold mb-6">{cleanQuestion}</h2>

        <div className="space-y-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(opt)}
              disabled={selected !== undefined}
              className={`w-full text-left px-4 py-3 rounded-xl border transition
                ${
                  selected !== undefined
                    ? opt === ans
                      ? "bg-green-500 text-white"
                      : opt === selected
                      ? "bg-red-500 text-white"
                      : "opacity-60"
                    : "bg-white hover:bg-indigo-100"
                }
              `}
            >
              {String.fromCharCode(65 + idx)}) {opt}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

function shuffleArray(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default QuizCard;