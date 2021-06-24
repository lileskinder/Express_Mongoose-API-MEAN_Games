const mongoose = require("mongoose");
const _myGame = mongoose.model("Game");

module.exports.getAllGames = function (request, response) {
    _myGame.find().exec(function (err, _games) {
        response.status(200).json(_games);
    });
}

module.exports.getOneGame = function(request, response) {
    const gameId = request.params.gameId;

    _myGame.findById(gameId).exec(function(err, _game) {
        response.status(200).json(_game);
    });
}