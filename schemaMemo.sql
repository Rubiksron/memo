DROP TABLE memos;

CREATE TABLE IF NOT EXISTS memos (
  id SERIAL PRIMARY KEY,
  memo VARCHAR(255),
  chore_type VARCHAR(255)
);

INSERT INTO memos (memo, chore_type) VALUES ('food memo 1', 'groceries');
INSERT INTO memos (memo, chore_type) VALUES ('food memo 2', 'groceries');
INSERT INTO memos (memo, chore_type) VALUES ('cleaning supplies memo 1', 'hardware');
INSERT INTO memos (memo, chore_type) VALUES ('cleaning supplies memo 2', 'hardware');
INSERT INTO memos (memo, chore_type) VALUES ('medicine 1', 'drugstore');
INSERT INTO memos (memo, chore_type) VALUES ('medicine 2', 'drugstore');