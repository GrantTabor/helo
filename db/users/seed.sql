create table users (
    userId serial primary key, 
    username varchar(20),
    password text,
    profile_picture text
)