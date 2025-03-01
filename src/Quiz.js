// src/Quiz.js
import React, { useState } from 'react';

function Quiz({ quizData, onFinish }) {
  // 今どの問題を解いているか
  const [currentIndex, setCurrentIndex] = useState(0);
  // 正解数
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    // 正解チェック
    if (answer === quizData[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
    // 次の問題へ or 終了
    const nextIndex = currentIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentIndex(nextIndex);
    } else {
      // 全問終了
      onFinish(score + 1); // 次も正解していれば +1
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>コーヒークイズ</h2>
      <p>{quizData[currentIndex].question}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {quizData[currentIndex].choices.map((choice) => (
          <li key={choice} style={{ margin: '5px 0' }}>
            <button onClick={() => handleAnswer(choice)}>
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
