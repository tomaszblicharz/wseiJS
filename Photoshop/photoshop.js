class Photoshop {
    constructor(targetElementId) {
        this.canvas = document.querySelector('#' + targetElementId)
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.canvas.addEventListener('touchstart', (e) => this.onTouchMove(e));
        // this.canvas.addEventListener('touchend', onTouchEnd);
        this.brushShapeName = 'square';
        this.brushShapeName = 'circle';
        this.brushShapeName = 'emptyCircle';





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
        switch (this.brushShapeName) {
            case 'square':
                this.ctx.fillRect(x, y, 10, 10);
                break;
            case 'circle':
                this.ctx.beginPath();
                this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
                this.ctx.fill()
                break;
            case 'emptyCircle':
                this.ctx.beginPath();
                this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
                this.ctx.stroke()
                break;
        }
        console.log(this.canvas.offsetTop)

    }

    // onTouchEnd(e) {
    //     this.onTouchEnd === true;
    // }

    setBrush(brushShape) {
        this.brushShapeName = brushShape;

    }


}