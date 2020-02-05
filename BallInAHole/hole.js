class Hole {
    constructor(game) {
        this.image = document.getElementById('imgRecycleBin');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.size = 100;
        this.x = 300;
        this.y = 300;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
    update() {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y
        }
    }
}