# Stay Alive game

## frontend

### dependencies
- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware

### components
- App.js
    - Header
    - CharacterForm
    - StepsTaken
    - GamesPlayed
    - Footer

### routes
    - CharacterForm => '/createcharacter'
    - StepsTaken => '/gamesteps'
    - GamesPlayed => '/gamesplayed'


## backend

### dependencies
- express
- express-session
- massive
- dotenv
- bcrypt


### endpoint routes

**game cards (view list of steps taken and add to it from backend)**
- getOne: => /api/gamesteps/:id  (view it in game)
- getList: => /api/gamesteps
- put: => /api/gamesteps/:id  (put it in a list)

**game played (view list of games played and add to it from backend)**
- getList: => /api/gamesplayed
- put: => /api/gamesplayed/:id
- delete: /api/gamesplayed/:id

**character**
- getCharacters: => /api/characters
- getCharacter: => /api/characters/:id
- post: => /api/createcharacter


### database schema

```sql
create table gamePathway(
    cardId serial primary key,
    gameStep varchar(1) not null,
    cardNum int,
    plot text
);
```

```sql
create table gamePlayed(
    id serial primary key,
    stepNum  int,
    cardId serial primary key
);
```

```sql
creat table users(
    id serial primary key,
    userName text

)

```sql
create table characters(
id serial primary key,
name varchar(40) not null,
gender varchar(20) not null,
hat varchar(20) not null,
outfit varchar(20) not null
);
```

### server file structure
- /server
    - index.js
    - controller/
        -gameController.js

### dotenv

```text
SESSION_SECRET=
SERVER_PORT=
CONNECTION_STRING=(append => ?ssl=true)
```