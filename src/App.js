import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import PrivacyPolicy from './components/PrivacyPolicy';  // プライバシーポリシーのページ
import Contact from './components/Contact';              // お問い合わせページ

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    // gtag が読み込まれていない場合は何もしない
    if (!window.gtag) return;

    // 新しいパスに対して page_view を送信
    window.gtag('config', 'G-1TF9F7N35K', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null; // 何も描画しない
}

function App() {
  return (
    <Router>
      {/* ルート変更検知のコンポーネント */}
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:level" element={<Quiz />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
