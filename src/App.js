import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        {/* ホーム画面 */}
        <Route path="/" element={<Home />} />

        {/* クイズ画面 : /quiz/1 や /quiz/2 ... のパスで表示 */}
        <Route path="/quiz/:level" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
