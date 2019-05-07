UPDATE gameHistory
SET active = false
WHERE user_id = $1;

INSERT INTO gameHistory(user_id, history)
VALUES ($1, $2)
RETURNING *;