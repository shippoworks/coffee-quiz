import { useEffect } from 'react'
import { useRouter } from './useRouter'
import { trackEvent } from './analytics'
import Home from './components/Home'
import Quiz from './components/Quiz'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'

function quizLevelFromPath(pathname: string): string | null {
  const m = pathname.match(/^\/quiz\/(\d+)$/)
  return m ? m[1] : null
}

export default function App() {
  const { pathname, navigate } = useRouter()

  useEffect(() => {
    trackEvent('page_view', { page_path: pathname })
  }, [pathname])

  const level = quizLevelFromPath(pathname)

  if (level !== null) {
    return <Quiz level={level} onBack={() => navigate('/')} />
  }
  if (pathname === '/privacy') {
    return <PrivacyPolicy onBack={() => navigate('/')} />
  }
  if (pathname === '/contact') {
    return <Contact onBack={() => navigate('/')} />
  }
  return <Home onNavigate={navigate} />
}
