INSERT INTO users (userName, password, fullName, email)
VALUES ($1, $2, $3, $4)
RETURNING *;