const { Router } = require("express");

indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Index Router home page");
});

module.exports = indexRouter;
