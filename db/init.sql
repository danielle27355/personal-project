

-- create table gamePathway(
--     cardId serial primary key,
--     gameStep varchar(1) not null,
--     cardNum int,
--     plot text
-- );

-- These are the cards and info that will be displayed to the user
-- insert into gamePathway(gameStep, cardNum, plot)
-- values('a', '1', 'ergrgwrtbwrt')

-- values('b', '1', 'ergrgwrtbwrt')
-- values('b', '2', 'ergrgwrtbwrt')

-- values('c', '1', 'ergrgwrtbwrt')
-- values('c', '2', 'ergrgwrtbwrt')
-- values('c', '3', 'ergrgwrtbwrt')
-- values('c', '4', 'ergrgwrtbwrt')

-- values('d', '1', 'ergrgwrtbwrt')
-- values('d', '2', 'ergrgwrtbwrt')
-- values('d', '3', 'ergrgwrtbwrt')
-- values('d', '4', 'ergrgwrtbwrt')
-- values('d', '5', 'ergrgwrtbwrt')
-- values('d', '6', 'ergrgwrtbwrt')
-- values('d', '7', 'ergrgwrtbwrt')
-- values('d', '8', 'ergrgwrtbwrt')

-- values('e', '1', 'ergrgwrtbwrt')
-- values('e', '2', 'ergrgwrtbwrt')
-- values('e', '3', 'ergrgwrtbwrt')
-- values('e', '4', 'ergrgwrtbwrt')
-- values('e', '5', 'ergrgwrtbwrt')
-- values('e', '6', 'ergrgwrtbwrt')
-- values('e', '7', 'ergrgwrtbwrt')
-- values('e', '8', 'ergrgwrtbwrt')
-- values('e', '9', 'ergrgwrtbwrt')
-- values('e', '10', 'ergrgwrtbwrt')
-- values('e', '11', 'ergrgwrtbwrt')
-- values('e', '12', 'ergrgwrtbwrt')
-- values('e', '13', 'ergrgwrtbwrt')
-- values('e', '14', 'ergrgwrtbwrt')
-- values('e', '15', 'ergrgwrtbwrt')
-- values('e', '16', 'ergrgwrtbwrt')




-- create table gamePlayed(
--     id serial primary key,
--     stepNum int,
--     cardId int
-- );

-- This should have data to begin with, this is for saving game data
-- insert into gamePlayed(stepNum, cardId)
-- values()




-- This is for character creation, what to do?
create table characters(
    id serial primary key,
    name varchar(40) not null,
    gender varchar(20) not null,
    hat varchar(20) not null,
    outfit varchar(20) not null
);

-- create table characterCreation(
    -- id serial primary key,
    -- name varchar(40) not null,
    -- personality1 varchar(50) not null,
    -- personality2 varchar(50) not null,
    -- personality3 varchar(50) not null,
    
-- )


create table users(
    id serial primary key,
    userName varchar(50) not null,
    password text,
    fullName varchar(50) not null,
    email varchar(50) not null
);