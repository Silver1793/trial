Richard Li Hangman

Overview

Im planning on creating a hangman game where people have a certain amount of lives and they must guess the word within that time. There will be a score as well where for each word that the user guesses before they run out of lives, their score will increment. At the end their score will be saved to their username so that they will have a highscore that will show.

Data Model

The application will store Users, Lists of words

users can have one list containing mulitple words (via references)
each user has their own name and password
each word has its own name and length

{
username: "richardli",
hash: // a password hash,
score: 0 //Starts off as 0 for all users
}
An Example List with Embedded Items:

{
user: // a reference to a User object
name: "Word List",
words: [
{ name: "silver", length: "6"},
{ name: "gold", length: "4"},
],
createdAt: // timestamp
}

Link to Commented First Draft Schema
(TODO: create a first draft of your Schemas in db.js and link to it\_)

Wireframes

/hangman - is the page verification for users where they can log in

/hangman/signup - if they are a new user they can sign up to become a user

/hangman/play - is the actual game which has a bunch of blanks and allows the user to input keys and guess the word.

/hangman/words - a list of all the current words, also allows users to add words of their own.

Site map
(TODO: draw out a site map that shows how pages are related to each other\_)

Here's a complex example from wikipedia, but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

User Stories or Use Cases

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can view my score which is 0 if this is the first time logged in
as a user, I can input keys and try and guess the word
as a user, I can see the list of words
as a user, I can create my own word and add it to the list where it will be saved later
Research Topics

(1 points) Heroku
I'm planning to use Heroku in order to run my application. Im hoping to learn how to use Heroku to be able to run both a front and backend application.

(2 points) Bootstrap
I believe that Bootstrap is a framework that allows for better styling in
React.js. I hope to use it to make my project look nicer and hopefully
the learning curve is not too hard. Since Bootstrap does not seem to be
an entire langauge that needs to be learned I awarded it 2 points.

(5 points) React.js
using React.js as the frontend framework;
Although we will learn React at the end of the semester, I beleive that I will have to learn it myself in order to complete this project. As a result I will award it 5 points.

8 points total out of 8 required points

Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js\_)

Annotations / References Used

React-Bootstrap docs - https://github.com/react-bootstrap/react-bootstrap
React.js documentation - https://reactjs.org/docs/getting-started.html
