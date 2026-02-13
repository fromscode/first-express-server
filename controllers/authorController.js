const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAuthorById(req, res) {
    const { authorId } = req.params;

    try {
        const author = await db.getAuthorById(+authorId);

        if (!author) {
            throw new CustomNotFoundError("Author not found");
            return;
        }

        res.send(`Author name: ${author.name}`);
    } catch (error) {
        console.log("Error retrieving author :", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { getAuthorById };
