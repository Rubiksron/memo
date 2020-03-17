DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  user_password VARCHAR(255)
);

INSERT INTO users (user_name, user_password) VALUES ('ron', 'emerald');
INSERT INTO users (user_name, user_password) VALUES ('lauren', 'lavender');
INSERT INTO users (user_name, user_password) VALUES ('dog', 'woof');
