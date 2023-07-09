export default class GameView {
    
    updateBoard(game) {
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();
        const board = game.board;
    
        for (let i = 0; i < board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("tile-winner");
    
            let tileType = board[i] === 'X' ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class="${tileType}">${board[i] ? board[i] : ""}</span>`;
    
            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
            }
        }
    
        if (winningCombination) {
            winningCombination.forEach(index => {
                const tile = document.querySelector(`.board-tile[data-index='${index}']`);
                tile.classList.add("tile-winner");
            });
    
            const winner = board[winningCombination[0]];
            this.showResultMessage(`Player ${winner} won!`);
        } else if (board.every(tile => tile !== null)) {
            this.showResultMessage("It's a tie!");
        }
    }
    
    showResultMessage(message) {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result-message");
        resultElement.textContent = message;
        document.body.appendChild(resultElement);
    
        setTimeout(() => {
            resultElement.remove();
        }, 2000);
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");
    
        playerX.classList.remove("active");
        playerO.classList.remove("active");
    
        if (game.turn === "X") {
            playerX.classList.add("active");
        } else {
            playerO.classList.add("active");
        }
    }
    
}