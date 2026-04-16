interface Env {
  DB: D1Database
}

interface LevelRow {
  id: number
  title: string
  question_count: number
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { results } = await context.env.DB.prepare(
    'SELECT id, title, question_count FROM levels WHERE is_published = 1 ORDER BY id ASC'
  ).all<LevelRow>()

  return Response.json({ levels: results }, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
