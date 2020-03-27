DROP TABLE memos;

CREATE TABLE IF NOT EXISTS memos (
  memo_id SERIAL PRIMARY KEY,
  id NUMERIC(255),
  memo VARCHAR(255),
  chore_type VARCHAR(255)
);

INSERT INTO memos (id, memo, chore_type) VALUES ('1', 'apples', 'groceries');
INSERT INTO memos (id, memo, chore_type) VALUES ('2', 'oranges', 'groceries');
INSERT INTO memos (id, memo, chore_type) VALUES ('3', 'shovel', 'hardware');
INSERT INTO memos (id, memo, chore_type) VALUES ('4', 'tape measure', 'hardware');
INSERT INTO memos (id, memo, chore_type) VALUES ('5', 'mary jane', 'drugstore');
INSERT INTO memos (id, memo, chore_type) VALUES ('6', 'pills', 'drugstore');