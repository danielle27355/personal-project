INSERT INTO gameHistory(user_id, history)
VALUES ($1, $2)
RETURNING *;