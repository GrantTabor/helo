select posts.title, posts.img, posts.content, users.username, users.profile_picture
from posts join users on users.userid = posts.author_id
where posts.author_id != $1;