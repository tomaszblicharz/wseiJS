let canvas = document.querySelector('gameArea')
let ctx = canvas.getContext('2d')
let ball = new Ball();


window.addEventListener('DOMContentLoaded', appStart);


function appStart() {




    ctx.drawBall(ctx)

}