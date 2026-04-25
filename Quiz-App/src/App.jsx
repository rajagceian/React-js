import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizCard from "./components/QuizCard";
import ResultCard from "./components/Result";
import Header from "./components/Header";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [i, setI] = useState(0);

  // 🔥 Global state
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      setQuestions(res.data.results);
    }
    fetchData();
  }, []);

  const handleRestart = () => {
    setAnswers({});
    setScore(0);
    setCorrect(0);
    setI(0);
    setShowResult(false);
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Header />
      {/* RESULT POPUP */}
      {showResult && (
        <ResultCard
          attempted={Object.keys(answers).length}
          correct={correct}
          wrong={Object.keys(answers).length - correct}
          score={score}
          onRestart={handleRestart}
          close={() => setShowResult(false)}
        />
      )}

      {/* LOADING */}
      {questions.length === 0 ? (
        <h2 className="text-center mt-20 text-xl">Loading...</h2>
      ) : (
        <QuizCard
          element={questions[i]}
          index={i}
          answers={answers}
          setAnswers={setAnswers}
          score={score}
          setScore={setScore}
          correct={correct}
          setCorrect={setCorrect}
        />
      )}

      {/* CONTROLS */}
      {questions.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-6 items-center">

          <button
            disabled={i === 0}
            className="px-4 py-2 bg-gray-300 rounded-xl disabled:opacity-40"
            onClick={() => setI(prev => prev - 1)}
          >
            Prev
          </button>

          <span className="font-semibold">
            {i + 1} / {questions.length}
          </span>

          <button
            disabled={i === questions.length - 1}
            className="px-5 py-2 bg-indigo-500 text-white rounded-xl disabled:opacity-40"
            onClick={() => setI(prev => prev + 1)}
          >
            Next
          </button>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-xl"
            onClick={() => setShowResult(true)}
          >
            Submit
          </button>

        </div>
      )}
    </div>
  );
};

export default App;