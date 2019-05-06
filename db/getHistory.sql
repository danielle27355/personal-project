select * from gameHistory
where user_id = $1
and active = true;