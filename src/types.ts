export interface Level {
  id: number
  title: string
  question_count: number
  is_published: number
}

export interface QuizQuestion {
  id: number
  question: string
  answers: [string, string, string, string]
  correctIndex: number
  explanation: string
}
