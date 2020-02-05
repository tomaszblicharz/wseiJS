class Ball {

    constructor(game) {

        this.image = document.getElementById('imgUnnamed');
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.x = 10;
        this.y = 300;
        this.gamma = 0;
        this.beta = 0;
        this.speed = {
            x: 0,
            y: 0
        };
        this.size = 40;
        this.gameloop
        this.startMoveBall()
        this.game = game
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
    }
    startMoveBall() {
        this.moveEvent = window.addEventListener('deviceorientation', this.handleOrientation, true)

    }
    update(deltaTime) {
        this.x += this.speed.x;
        this.y += this.speed.y;
        if (this.x + this.size > this.gameWidth || this.x < 0) {
            this.speed.x = -this.speed.x
        }
        if (this.y + this.size > this.gameHeight || this.y < 0) {
            this.speed.y = -this.speed.y
        }

        let bottomOfBall = this.y + this.size;
        let topOfHole = this.game.hole.y
        let leftSideOfHole = this.game.hole.x;
        let rightSideOfHole = this.game.hole.x + this.game.hole.width
        if (bottomOfBall >= topOfHole && this.x >= leftSideOfHole && this.x + this.size <= rightSideOfHole) {
            this.speed.y = -this.speed.y
            this.y = this.game.hole.y - this.size;
        }

    }
    handleOrientation = (e) => {
        let x = e.gamma;
        let y = e.beta;
        this.speed.x += x / 300
        this.speed.y += y / 300
    }

}