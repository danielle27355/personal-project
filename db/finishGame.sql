UPDATE gameHistory
SET history=$1, active=false
WHERE user_id=$2;