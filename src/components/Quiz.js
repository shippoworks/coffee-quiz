import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/levelsMarge.js';
import '../styles/Quiz.css';

function Quiz() {
  // URL パラメータ(:level)を取得
  const { level } = useParams();
  const navigate = useNavigate();

  // 該当レベルのクイズデータを取得
  const questions = quizData[level] || [];

  // ステート管理
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false); // 回答前(false)/回答後(true)

  // 正解数（任意: 最終的に集計してスコアを表示する場合に使用）
  const [score, setScore] = useState(0);
  // 結果画面を表示するかどうか
  const [isFinished, setIsFinished] = useState(false);

  // 現在の問題
  const currentQuestion = questions[currentQuestionIndex] || {};

  // クイズが存在しないレベルの場合の表示
  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>レベル {level} のクイズは存在しません</h2>
        <button onClick={() => navigate('/')}>ホームに戻る</button>
      </div>
    );
  }

  // クイズ終了（全問題回答）後の画面
  if (isFinished) {
    return (
      <div className="quiz-container">
        <h2>レベル {level} のクイズが終了しました！</h2>
        <p>
          {questions.length}問中 {score}問 正解でした。
        </p>
        <button onClick={() => navigate('/')}>ホームに戻る</button>
      </div>
    );
  }

  // 回答処理
  const handleAnswer = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    setIsAnswered(true);

    // 正解判定してスコアを加算
    if (answerIndex === currentQuestion.correctIndex) {
      setScore(score + 1);
    }

    // GA イベント送信: 回答したことを記録
    if (window.gtag) {
      window.gtag('event', 'quiz_answer', {
        event_category: 'quiz',
        event_label: `level_${level}`,
        value: answerIndex, // ユーザーが選んだ回答のindexを送る例
      });
    }
  };

  // 次の問題へ進む処理
  const handleNextQuestion = () => {
    // 最終問題かどうか
    if (currentQuestionIndex === questions.length - 1) {
      // 全問終了
      setIsFinished(true);
      return;
    }

    // 次の問題へ
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
  };

  // 表示上で使う計算
  const questionNumber = currentQuestionIndex + 1;     // 今が何問目か(1-based)
  const totalQuestions = questions.length;             // 全問題数

  // 選択肢の描画
  const renderAnswers = () => {
    return currentQuestion.answers.map((answer, index) => (
      <button
        key={index}
        className="answer-button"
        onClick={() => handleAnswer(index)}
        disabled={isAnswered} 
      >
        {answer}
      </button>
    ));
  };

  // 回答判定
  const isCorrect = selectedAnswerIndex === currentQuestion.correctIndex;

  return (
    <div className="quiz-container">
      {/* 共通要素 */}
      <h2>レベル {level}</h2>
      <p>
        問題 {questionNumber} / {totalQuestions}
      </p>
      <h3>{currentQuestion.question}</h3>

      {/* 回答前の画面 */}
      {!isAnswered && (
        <div className="answers-section">
          {/* 回答選択肢 */}
          {renderAnswers()}
        </div>
      )}

      {/* 回答後の画面 */}
      {isAnswered && (
        <div className="answers-section">
          {/* 選択肢（disabledにしてそのまま残してもよいが、ここでは簡易表示だけにする例） */}
          {renderAnswers()}

          {/* 正解 or 不正解 */}
          <p className="judge-text" style={{ color: isCorrect ? 'green' : 'red' }}>
            {isCorrect ? '正解！' : '不正解...'}
          </p>

          {/* あなたの回答 */}
          <p>あなたの回答：{currentQuestion.answers[selectedAnswerIndex]}</p>

          {/* 正解の回答 */}
          <p>正解：{currentQuestion.answers[currentQuestion.correctIndex]}</p>

          {/* 解説 */}
          <div className="explanation">
            <p>{currentQuestion.explanation}</p>
          </div>

          {/* 次の問題へ */}
          <button className="next-button" onClick={handleNextQuestion}>
            次の問題へ進む
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
