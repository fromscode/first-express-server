const express = require("express");
const app = express();

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// global error handler (has 4 parameters which allows express to treat this differently than other middleware functions)
// catches all thrown errors or calls to next(error)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (error) => {
    // This is important!
    // Without this, any startup errors will silently fail
    // instead of giving you a helpful error message.
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});
