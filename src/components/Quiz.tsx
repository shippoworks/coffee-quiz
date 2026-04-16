import { useState, useEffect } from 'react'
import { trackEvent } from '../analytics'
import { QuizQuestion } from '../types'

interface Props {
  level: string
  onBack: () => void
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
    return <div className="quiz-container"><p>Loading...</p></div>
  }

  if (error || questions.length === 0) {
    return (
      <div className="quiz-container">
        <h2>Lv. {level} のクイズは存在しません</h2>
        <button className="home-back" onClick={onBack}>ホームに戻る</button>
      </div>
    )
  }

  if (isFinished) {
    const correctRate = Math.floor((score / questions.length) * 100)
    return (
      <div className="quiz-container">
        <h2>Lv. {level} のクイズが終了しました！</h2>
        <p className="quiz-result">{questions.length}問中 {score}問 正解</p>
        <p className="quiz-result">正答率:</p>
        <p className="correct-Rate">{correctRate}%</p>
        <button className="home-back" onClick={onBack}>ホームに戻る</button>
      </div>
    )
  }

  const current = questions[currentIndex]
  const isCorrect = selectedIndex === current.correctIndex

  const handleAnswer = (answerIndex: number) => {
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

  return (
    <div className="quiz-container">
      <h2>Lv. {level}</h2>
      <p>question {currentIndex + 1} / {questions.length}</p>
      <h3>{current.question}</h3>

      {!isAnswered && (
        <div className="answers-section">
          {current.answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button${selectedIndex === index ? ' selected' : ''}`}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              {answer}
            </button>
          ))}
        </div>
      )}

      {isAnswered && (
        <div className="answers-section">
          {current.answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button${selectedIndex === index ? ' selected' : ''}`}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              {answer}
            </button>
          ))}
          <p
            className="judge-text"
            style={{ color: isCorrect ? '#fd7200' : '#5e5e5e' }}
          >
            {isCorrect ? '正解！' : '不正解...'}
          </p>
          <div className="explanation">
            <p className="correct-answer">正解：{current.answers[current.correctIndex]}</p>
            <p>{current.explanation}</p>
          </div>
          <button className="next-button" onClick={handleNext}>
            次の問題へ進む
          </button>
        </div>
      )}
    </div>
  )
}
