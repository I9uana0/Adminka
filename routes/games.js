const gamesRouter = require("express").Router();
const { getAllGames } = require("../middlewares/games");
const { sendAllGames, deleteGame, addGameController } = require('../controllers')


gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, addGameController)

module.exports = gamesRouter;