
create table gameHistory(
    id serial primary key,
    history text[],
    user_id integer references users (id),
    active bool default true
);


create table characters(
    id serial primary key,
    user_id integer references users (id),
    name varchar(40) not null,
    emotions varchar(50) not null,
    demeanor varchar(50) not null,
    social varchar(50) not null
);


create table users(
    id serial primary key,
    userName varchar(50) not null,
    password text,
    fullName varchar(50) not null,
    email varchar(50) not null
);
