class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;
        this.startTime = new Date().getTime();
        this.finishTime;
        this.endGame = false;
        this.startButton = document.querySelector('#btnStart');
        this.timeBoard = document.querySelector('#time');
    }

    startGame() {
        this.ball = new Ball(this);
        this.hole = new Hole(this);
    }

    draw(ctx) {
        // ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
        this.ball.draw(ctx)
        this.hole.draw(ctx)
    }

    update(deltaTime) {
        this.ball.update(deltaTime)

        if (checkBallInHole(this.ball, this.hole)) {
            if (!this.endGame) {
                this.finishGame()
                this.endGame = true;
            }

        }
    }


    finishGame() {
        let timeToFinishGame = new Date().getTime() - this.startTime;
        console.log(timeToFinishGame);
        alert(`Wygrałeś! Twój czas to ${timeToFinishGame.toFixed(1)* 0.001} s`)
    }
}