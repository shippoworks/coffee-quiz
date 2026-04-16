interface Env {
  DB: D1Database
}

interface QuestionRow {
  id: number
  question: string
  answer_a: string
  answer_b: string
  answer_c: string
  answer_d: string
  correct_index: number
  explanation: string
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const levelId = parseInt(context.params.level as string, 10)

  if (isNaN(levelId)) {
    return Response.json({ error: 'Invalid level' }, { status: 400 })
  }

  const level = await context.env.DB.prepare(
    'SELECT id FROM levels WHERE id = ? AND is_published = 1'
  ).bind(levelId).first()

  if (!level) {
    return Response.json({ questions: [] }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  }

  const { results } = await context.env.DB.prepare(
    'SELECT id, question, answer_a, answer_b, answer_c, answer_d, correct_index, explanation FROM questions WHERE level_id = ? ORDER BY sort_order ASC'
  ).bind(levelId).all<QuestionRow>()

  const questions = results.map(r => ({
    id: r.id,
    question: r.question,
    answers: [r.answer_a, r.answer_b, r.answer_c, r.answer_d] as [string, string, string, string],
    correctIndex: r.correct_index,
    explanation: r.explanation,
  }))

  return Response.json({ questions }, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
