CRUD

C – Create character
(“/api/createcharacter”)

R – Get the path of steps to take in game, individually
("/api/gamesteps/:id")

U - Put into a list of steps taken
("/api/gamesteps/:id")

U – Put into a list of games played
("/api/gamesplayed/:id")

D – Delete game played from history list
("/api/gamesplayed/:id")



DB schema

Table gamePathway               (Each entry is another step in the game)
cardId serial primary key
gameStep varchar(1) not null
cardNum int
plot text

Table gamePlayed               (Each table is one game played)
id serial primary key
stepNum  int
cardId serial primary key   (foreign key)

Table characters                (This is the information for creating a character)
id serial primary key
name varchar(40) not null
gender varchar(20) not null
hat varchar(20) not null
outfit varchar(20) not null


MVP points
Amazon S3 - 10      (display cat pictures?)
Authentication 10
//Stripe - maybe 10   (donations to website)
Responsive - 20     (design)
Presentation - 10   (3 minutes)
Redux - 20          (create character?)

