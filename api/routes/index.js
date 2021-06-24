const express = require("express");
const _gameController = require("../controllers/gamesController");

const router = express.Router();

router.route("/games")
    .get(_gameController.getAllGames);

router.route("/games/:gameId")
    .get(_gameController.getOneGame);

module.exports = router;