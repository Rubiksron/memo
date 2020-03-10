DROP TABLE memos;

CREATE TABLE IF NOT EXISTS memos (
  id SERIAL PRIMARY KEY,
  memo VARCHAR(255)
)

INSERT INTO memos (memo) VALUES ('test memo 1')
INSERT INTO memos (memo) VALUES ('test memo 2')
INSERT INTO memos (memo) VALUES ('test memo 3')