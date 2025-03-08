import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/levelsMarge.js'; // クイズデータを読み込み
import '../styles/Quiz.css';                   // スタイルシートを読み込み

function Quiz() {
  // URL パラメータ(:level)を取得する（React Router v6 の場合）
  const { level } = useParams();
  // ページ遷移用フック
  const navigate = useNavigate();

  // 指定レベルのクイズデータを取得する
  const questions = quizData[level] || [];

  // ステート管理 -------------------------------------
  // 現在の問題番号（0-based index）
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // ユーザーが選択した回答のインデックス（例: 0 ~ 3）
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  // 回答前(false) / 回答後(true) を判定するためのフラグ
  const [isAnswered, setIsAnswered] = useState(false);
  // 正解数（スコア）
  const [score, setScore] = useState(0);
  // 全問回答したら true にし、結果画面を表示
  const [isFinished, setIsFinished] = useState(false);

  // 現在の問題を取得（ない場合は空オブジェクト）
  const currentQuestion = questions[currentQuestionIndex] || {};

  // クイズが存在しないレベルの場合の表示 --------------------------------
  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>Lv. {level} のクイズは存在しません</h2>
        <button onClick={() => navigate('/')}>ホームに戻る</button>
      </div>
    );
  }

  // 全問題の回答が終了した後の画面 ---------------------------------------
  if (isFinished) {
    const correctRate = Math.floor((score / questions.length) * 100);

    return (
      <div className="quiz-container">
        <h2>Lv. {level} のクイズが終了しました！</h2>
        <p className='quiz-result'>
          {questions.length}問中 {score}問 正解
        </p>
        <p className='quiz-result'>
          正答率:
        </p>
        <p className='correct-Rate'>{correctRate}%</p>
        <button className='home-back' onClick={() => navigate('/')}>ホームに戻る</button>
      </div>
    );
  }

  // 回答処理 ------------------------------------------------------------
  const handleAnswer = (answerIndex) => {
    // ユーザーが選択した回答インデックスを更新
    setSelectedAnswerIndex(answerIndex);
    // 回答済みにセット
    setIsAnswered(true);

    // 正解判定してスコアを加算
    if (answerIndex === currentQuestion.correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    // GA イベント送信（任意）
    if (window.gtag) {
      window.gtag('event', 'quiz_answer', {
        event_category: 'quiz',
        event_label: `level_${level}`,
        value: answerIndex,
      });
    }
  };

  // 次の問題へ進む処理 --------------------------------------------------
  const handleNextQuestion = () => {
    // 最終問題かどうか
    if (currentQuestionIndex === questions.length - 1) {
      // 全問終了
      setIsFinished(true);
      return;
    }
    // 次の問題へ
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
  };

  // 表示用の計算
  const questionNumber = currentQuestionIndex + 1; // 1-based
  const totalQuestions = questions.length;

  // 選択肢ボタンの描画 --------------------------------------------------
  const renderAnswers = () => {
    return currentQuestion.answers.map((answer, index) => {
      // 選択された回答かどうかを判定
      const isSelected = selectedAnswerIndex === index;

      return (
        <button
          key={index}
          className={`answer-button ${isSelected ? 'selected' : ''}`}
          onClick={() => handleAnswer(index)}
          disabled={isAnswered} // 回答済みなら他の選択肢はクリック不可に
        >
          {answer}
        </button>
      );
    });
  };

  // 正解/不正解の判定
  const isCorrect = selectedAnswerIndex === currentQuestion.correctIndex;

  return (
    <div className="quiz-container">
      {/* 共通要素 ------------------------------------------------------ */}
      <h2>Lv. {level}</h2>
      <p>
        question {questionNumber} / {totalQuestions}
      </p>
      <h3>{currentQuestion.question}</h3>

      {/* 回答前の画面 -------------------------------------------------- */}
      {!isAnswered && (
        <div className="answers-section">
          {renderAnswers()}
        </div>
      )}

      {/* 回答後の画面 -------------------------------------------------- */}
      {isAnswered && (
        <div className="answers-section">
          {/* 選択肢をそのまま残す例（ただし disabled = true） */}
          {renderAnswers()}

          {/* 正解 or 不正解 */}
          <p
            className="judge-text"
            style={{ color: isCorrect ? '#fd7200' : '#5e5e5e' }}
          >
            {isCorrect ? '正解！' : '不正解...'}
          </p>

          {/* 正解の回答 */}
          

          {/* 解説 */}
          <div className="explanation">
            <p className='correct-answer'>正解：{currentQuestion.answers[currentQuestion.correctIndex]}</p>
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
