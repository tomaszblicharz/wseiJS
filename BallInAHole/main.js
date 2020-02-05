document.addEventListener('DOMContentLoaded', appStart);

const game_width = 700,
    game_height = 600;
let canvas,
    ctx,
    ball,
    hole,
    game,
    lastTime = 0;

function appStart() {
    canvas = document.getElementById('gameArea');
    ctx = canvas.getContext('2d')

    game = new Game(game_width, game_height);
    game.startGame()

    gameLoop()
}

function gameLoop(timestamp) {

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, game_width, game_height)
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}