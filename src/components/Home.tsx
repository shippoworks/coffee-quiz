import { useState, useEffect } from 'react'
import { trackEvent } from '../analytics'
import { Level } from '../types'

interface Props {
  onNavigate: (path: string) => void
}

export default function Home({ onNavigate }: Props) {
  const [levels, setLevels] = useState<Level[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/levels')
      .then(r => {
        if (!r.ok) throw new Error('Failed to load levels')
        return r.json() as Promise<{ levels: Level[] }>
      })
      .then(data => {
        setLevels(data.levels)
        setLoading(false)
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : 'Unknown error')
        setLoading(false)
      })
  }, [])

  const handleStartQuiz = (level: Level) => {
    trackEvent('quiz_start', { event_category: 'quiz', event_label: `level_${level.id}` })
    onNavigate(`/quiz/${level.id}`)
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Coffee Quiz</h1>

      <p className="home-intro">
        味は変わらない。
        けれど知るほどに
        <br />
        その一杯が物語になる。
      </p>

      <p className="home-intro-eng">
        The taste never changes. Yet with each new insight, that single cup gently unfolds into a story all its own.
      </p>

      <div className="quiz-level-buttons">
        {loading && <p style={{ color: '#fd7200' }}>Loading...</p>}
        {error && <p style={{ color: '#5e5e5e' }}>エラーが発生しました</p>}
        {!loading && !error && levels.map(level => (
          <button
            key={level.id}
            onClick={() => handleStartQuiz(level)}
            className="quiz-button"
          >
            {level.title}（{level.question_count}問）
          </button>
        ))}
      </div>

      <footer className="home-footer">
        <button className="footer-button" onClick={() => onNavigate('/privacy')}>
          プライバシーポリシー
        </button>
        <button className="footer-button" onClick={() => onNavigate('/contact')}>
          お問合せ
        </button>
      </footer>
    </div>
  )
}
