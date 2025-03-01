// src/Result.js
import React from 'react';

function Result({ score, total, onRetry }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>結果発表</h2>
      <p>あなたの正解数は {score} / {total} 問です！</p>
      <button onClick={onRetry}>もう一度挑戦する</button>
    </div>
  );
}

export default Result;
