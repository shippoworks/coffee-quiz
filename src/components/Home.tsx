import { useState, useEffect } from 'react'
import { trackEvent } from '../analytics'
import { Level } from '../types'

interface Props {
  onNavigate: (path: string) => void
}

const BADGE_CLASSES = ['badge-1', 'badge-2', 'badge-3', 'badge-4', 'badge-5']

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
      <div className="home-header">
        <h1 className="home-title">Coffee Quiz</h1>
        <p className="home-subtitle">コーヒーの知識をレベルアップ ☕</p>
      </div>

      <div className="home-intro-card">
        <p>味は変わらない。けれど知るほどに<br />その一杯が物語になる。</p>
        <p>The taste never changes. Yet with each new insight,<br />that single cup unfolds into a story all its own.</p>
      </div>

      <p className="home-levels-title">レベルを選択</p>

      <div className="quiz-level-buttons">
        {loading && <p className="home-loading">読み込み中...</p>}
        {error && <p className="home-loading">エラーが発生しました</p>}
        {!loading && !error && levels.map((level, i) => (
          <button
            key={level.id}
            onClick={() => handleStartQuiz(level)}
            className="quiz-button"
          >
            <span>{level.title}</span>
            <span className={`quiz-button-badge ${BADGE_CLASSES[i % BADGE_CLASSES.length]}`}>
              {level.question_count}問
            </span>
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
