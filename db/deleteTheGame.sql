DELETE FROM gameHistory
WHERE id = $1;

SELECT * FROM gameHistory
WHERE user_id = $2; 