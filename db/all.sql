select p.title,u.username,u.profile_pic
from posts p
join users_mini u on p.author_id = u.id;