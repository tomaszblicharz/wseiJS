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

    }
    handleOrientation = (e) => {
        let x = e.gamma;
        let y = e.beta;
        this.speed.x += x / 300
        this.speed.y += y / 300
    }
}