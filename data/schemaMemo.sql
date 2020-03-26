DROP TABLE memos;

CREATE TABLE IF NOT EXISTS memos (
  id VARCHAR(255),
  memo VARCHAR(255),
  chore_type VARCHAR(255)
);

INSERT INTO memos (id, memo, chore_type) VALUES ('1', 'food memo 1', 'groceries');
INSERT INTO memos (id, memo, chore_type) VALUES ('2', 'food memo 2', 'groceries');
INSERT INTO memos (id, memo, chore_type) VALUES ('3', 'cleaning memo 1', 'hardware');
INSERT INTO memos (id, memo, chore_type) VALUES ('4', 'cleaning memo 2', 'hardware');
INSERT INTO memos (id, memo, chore_type) VALUES ('5', 'medicine 1', 'drugstore');
INSERT INTO memos (id, memo, chore_type) VALUES ('6', 'medicine 2', 'drugstore');