class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;


    }
    startGame() {
        this.ball = new Ball(this);
        this.hole = new Hole(this);
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
    update(deltaTime) {
        this.ball.update(deltaTime)

    }
    draw(ctx) {
        this.ball.draw(ctx)
        this.hole.draw(ctx)
    }

}