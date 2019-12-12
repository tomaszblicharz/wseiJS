class Photoshop {
    constructor(targetElementId) {
        this.canvas = document.querySelector('#' + targetElementId)

        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.canvas.addEventListener('touchstart', (e) => this.onTouchMove(e));
        // this.canvas.addEventListener('touchend', onTouchEnd);
        this.brushShapeName = 'square';
        // this.brushShapeName = 'circle';




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
        console.log(appendChild)
        // this.ctx.stroke();
    }

    // onTouchEnd(e) {
    //     this.onTouchEnd === true;
    // }

    setBrush(brushShape) {
        this.brushShapeName = brushShape;

    }


}