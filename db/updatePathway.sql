UPDATE gameHistory
SET history=$1
WHERE user_id=$2
AND active=true;