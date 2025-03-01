import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  // 各クイズレベルボタン押下時にページ遷移
  const handleStartQuiz = (level) => {
    // GA イベント送信: 各レベルの挑戦数を集計
    if (window.gtag) {
      window.gtag('event', 'quiz_start', {
        event_category: 'quiz',
        event_label: `level_${level}`,
      });
    }
    
    navigate(`/quiz/${level}`);
  };

  // 問い合わせボタン押下時の処理(サンプル実装)
  const handleContact = () => {
    alert('お問い合わせありがとうございます。');
  };

  return (
    <div className="home-container">
      {/* サイト名 */}
      <h1 className="home-title">Coffee Quiz</h1>

      {/* サイト紹介文 */}
      <p className="home-intro">
        さまざまなレベルの問題を通してコーヒーの知識を深めてみましょう。
        <br />
        楽しみながらコーヒーについて学ぶことができます！
      </p>

      {/* レベル別クイズ開始ボタン */}
      <div className="quiz-level-buttons">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => handleStartQuiz(level)}
            className="quiz-button"
          >
            レベル {level} を始める
          </button>
        ))}
      </div>

      {/* 問い合わせボタン */}
      <div className="contact-button-wrapper">
        <button onClick={handleContact} className="contact-button">
          お問い合わせ
        </button>
      </div>
    </div>
  );
}

export default Home;
