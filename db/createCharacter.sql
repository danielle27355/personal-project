INSERT INTO characters(name, emotions, demeanor, social, user_id)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;