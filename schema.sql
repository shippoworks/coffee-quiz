CREATE TABLE IF NOT EXISTS levels (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  question_count INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level_id INTEGER NOT NULL,
  question TEXT NOT NULL,
  answer_a TEXT NOT NULL,
  answer_b TEXT NOT NULL,
  answer_c TEXT NOT NULL,
  answer_d TEXT NOT NULL,
  correct_index INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (level_id) REFERENCES levels(id)
);
