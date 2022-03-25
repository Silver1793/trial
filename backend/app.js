const express = require("express");

const home = require("./routes/home");
const signup = require("./routes/signup");
const words = require("./routes/words");
const play = require("./routes/play");

const app = express();
const port = process.env.PORT || 6001;

app.use(express.json());

app.use("/hangman", home);
app.use("/hangman/words", words);
app.use("/hangman/play", play);
app.use("/hangman/signup", signup);

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
