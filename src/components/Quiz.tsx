import { useState, useEffect } from 'react'
import { trackEvent } from '../analytics'
import { QuizQuestion } from '../types'

interface Props {
  level: string
  onBack: () => void
}

function resultMessage(rate: number): string {
  if (rate === 100) return '完璧！コーヒーマスター認定 🏆'
  if (rate >= 80) return 'すごい！コーヒー通ですね ☕'
  if (rate >= 60) return 'なかなかです！もう少しで上級者 🌱'
  if (rate >= 40) return '基礎はバッチリ。さらに深掘りしよう 📖'
  return 'これから始まる。コーヒーの世界は深い ✨'
}

function resultEmoji(rate: number): string {
  if (rate === 100) return '🏆'
  if (rate >= 80) return '🎉'
  if (rate >= 60) return '👍'
  if (rate >= 40) return '📖'
  return '☕'
}

export default function Quiz({ level, onBack }: Props) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    fetch(`/api/questions/${level}`)
      .then(r => {
        if (!r.ok) throw new Error('Failed to load questions')
        return r.json() as Promise<{ questions: QuizQuestion[] }>
      })
      .then(data => {
        setQuestions(data.questions)
        setLoading(false)
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : 'Unknown error')
        setLoading(false)
      })
  }, [level])

  if (loading) {
    return (
      <div className="quiz-container">
        <p style={{ textAlign: 'center', color: '#9AAABF', paddingTop: '40px' }}>読み込み中...</p>
      </div>
    )
  }

  if (error || questions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-top-bar">
          <button className="quiz-back-btn" onClick={onBack}>←</button>
        </div>
        <p style={{ color: '#9AAABF', textAlign: 'center' }}>クイズが見つかりませんでした</p>
        <button className="home-back" onClick={onBack}>ホームに戻る</button>
      </div>
    )
  }

  if (isFinished) {
    const correctRate = Math.floor((score / questions.length) * 100)
    return (
      <div className="result-container">
        <div className="result-emoji">{resultEmoji(correctRate)}</div>
        <p className="result-title">Level {level} クリア！</p>
        <div className="result-score-card">
          <div className="result-rate">{correctRate}%</div>
          <p className="result-detail">{questions.length}問中 {score}問 正解</p>
        </div>
        <p className="result-message">{resultMessage(correctRate)}</p>
        <button className="home-back" onClick={onBack}>← ホームに戻る</button>
      </div>
    )
  }

  const current = questions[currentIndex]
  const isCorrect = selectedIndex === current.correctIndex
  const progressPct = Math.round(((currentIndex) / questions.length) * 100)

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return
    setSelectedIndex(answerIndex)
    setIsAnswered(true)
    if (answerIndex === current.correctIndex) {
      setScore(prev => prev + 1)
    }
    trackEvent('quiz_answer', {
      event_category: 'quiz',
      event_label: `level_${level}`,
      value: answerIndex,
    })
  }

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setIsFinished(true)
      return
    }
    setCurrentIndex(prev => prev + 1)
    setSelectedIndex(null)
    setIsAnswered(false)
  }

  const getAnswerClass = (index: number) => {
    if (!isAnswered) return selectedIndex === index ? 'answer-button selected' : 'answer-button'
    if (index === current.correctIndex) return 'answer-button correct'
    if (index === selectedIndex) return 'answer-button incorrect'
    return 'answer-button'
  }

  return (
    <div className="quiz-container">
      <div className="quiz-top-bar">
        <button className="quiz-back-btn" onClick={onBack}>←</button>
        <div className="quiz-progress-wrap">
          <div className="quiz-progress-label">
            {currentIndex + 1} / {questions.length}問
          </div>
          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      <div className="quiz-question-card">
        <div className="quiz-level-badge">Level {level}</div>
        <p className="quiz-question-text">{current.question}</p>
      </div>

      <div className="answers-section">
        {current.answers.map((answer, index) => (
          <button
            key={index}
            className={getAnswerClass(index)}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered}
          >
            {answer}
          </button>
        ))}

        {isAnswered && (
          <>
            <div className={`judge-banner ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '正解！ 🎉' : '不正解... 😢'}
            </div>
            <div className="explanation-card">
              <p className="correct-answer-label">正解</p>
              <p className="correct-answer-text">{current.answers[current.correctIndex]}</p>
              <p className="explanation-text">{current.explanation}</p>
            </div>
            <button className="next-button" onClick={handleNext}>
              {currentIndex === questions.length - 1 ? '結果を見る →' : '次の問題へ →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
