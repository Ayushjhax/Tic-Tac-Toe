import Game from "./game.js"
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
    console.log("Current turn is", game.turn); 
}

document.querySelector(".Restart").addEventListener("click", () => {
    onRestartClick();
});

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);
