const db = require("../db");

async function getAuthorById(req, res) {
    const { authorId } = req.params;

    try {
        const author = await db.getAuthorById(+authorId);

        if (!author) {
            res.status(404).send("Author not found");
            return;
        }

        res.send(`Author name: ${author.name}`);
    } catch (error) {
        console.log("Error retrieving author :", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAuthorById };
