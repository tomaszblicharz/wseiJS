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