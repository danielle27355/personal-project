select *
from characters
inner join users
on characters.user_id = users.id
where users.id = $1
