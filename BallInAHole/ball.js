class Ball {

    constructor() {

        this.image = document.getElementById('imgBall');

    }
    draw(ctx) {
        ctx.drawImage(this.image, 10, 10, 16, 16)
    }

}