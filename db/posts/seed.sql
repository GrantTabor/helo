create table posts (post_id serial primary key, title varchar(45), img text, content text, author_id int references users(userid));
