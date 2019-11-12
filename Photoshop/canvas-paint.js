document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart() {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click', () => darkenFilter())
    document
        .querySelector('#brightnes')
        .addEventListener('click', () => brightnesFilter())
    ctx = canvas.getContext('2d')
    // ctx.rect(50,50,300,200)
    // ctx.fill()
    // ctx.arc(500,500,50,0,2 * Math.PI)
    // ctx.stroke() //-obrysowanie
    drawImage()

}

function drawImage() {
    const image = new Image()
    image.src = "zdjecie.jpg"
    image.addEventListener('load', () => {
        ctx.drawImage(image, 0, 0)
    })
}

function darkenFilter(amount = 10) //-sciemnia pixele i przepisuje na nowo do canvasa
{
    const canvasData = ctx.getImageData(0, 0, 900, 600)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] -= amount
        canvasData.data[i + 1] -= amount
        canvasData.data[i + 2] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}

function brightnesFilter(amount = 10) //-rozjasnia pixele i przepisuje na nowo do canvasa
{
    const canvasData = ctx.getImageData(0, 0, 900, 600)
    for (let i = 0; i < canvasData.data.length; i += 4) {
        canvasData.data[i] += amount
        canvasData.data[i + 1] += amount
        canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
class Photoshop {
    constructor(targetElementId) {
        this.canvas = document.querySelector('#' + targetElementId)
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e))
        this.canvas.addEventListener('touchstart', (e) => this.onTouchMove(e))
        canvas.addEventListener('touchend', onTouchEnd)
        this.brushShapeName = 'square';


    }

    onTouchMove(e) {
        // pobierz pędzel
        this.brushShape = new Brush(this.brushShapeName)
        const brush = this.brushShape.getBrush();
        // ustal położenie
        let x = e.touches[0].clientX - this.canvas.offsetLeft;
        let y = e.touches[0].clientY - this.canvas.offsetTop;
        brush.style.top = `${y}px`;
        brush.style.left = `${x}px`;
        //namaluj
        this.canvas.appendChild(brush);
    }

    setBrush(brushShape) {
        this.brushShapeName = brushShape;

    }
}