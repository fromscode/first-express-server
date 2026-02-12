const { Router } = require("express");

bookRouter = Router();
bookRouter.get("/", (req, res) => {
    res.send("Books Router home page");
});

module.exports = bookRouter;
