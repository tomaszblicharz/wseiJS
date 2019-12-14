class Photoshop {
    constructor(targetElementId) {
        this.canvas = document.querySelector('#' + targetElementId)
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.canvas.addEventListener('touchstart', (e) => this.onTouchMove(e));
        // this.canvas.addEventListener('touchend', (e) => this.onTouchMove(e));
        this.brushShapeName = 'square', 'circle', 'emptyCircle';
        this.simpleColorBrush = 'colorRed', 'colorGreen', 'colorYellow', 'colorGreen', 'colorBlack';
        // this.brushColor = document.querySelector('.paint-color');

    }


    onTouchMove(e) {
        // pobierz pędzel
        this.brushShape = new Brush(this.brushShapeName, this.brushColor, this.simpleColorBrush)
        const brush = this.brushShape.getBrush();
        // ustal położenie
        let x = e.touches[0].clientX - this.canvas.offsetLeft;
        let y = e.touches[0].clientY - this.canvas.offsetTop;
        brush.style.top = `${y}px`;
        brush.style.left = `${x}px`;
        this.ctx.strokeStyle = this.brushShape.colorBrush;
        this.ctx.fillStyle = this.brushShape.colorBrush;
        //namaluj

        switch (this.brushShapeName) {
            case 'square':
                this.ctx.fillRect(x, y, 15, 15);
                this.ctx.stroke()

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

        //wybierz kolor
        switch (this.simpleColorBrush) {
            case 'colorRed':
                this.ctx.fillStyle = this.brushShape.colorBrush
                break;
                // case 'colorGreen':
                //     this.ctx.fillStyle = 'green'
                //     break;
                // case 'colorYellow':
                //     this.ctx.fillStyle = 'yellow'
                //     break;
                // case 'colorBlue':
                //     this.ctx.fillStyle = 'blue'
                //     break;
                // case 'colorBlack':
                //     this.ctx.fillStyle = 'black'
                //     break;

                // }
                // console.log(this.canvas.offsetTop)

        }
    }
    // onTouchEnd(e) {
    //     this.onTouchEnd === true;
    // }

    setBrush(brushShape) {
        this.brushShapeName = brushShape;
    }
    // setColorBrush(setColorBrush) {
    //     this.brushColor = setColorBrush;
    // }
    setColorBrush(colorBrush) {
        this.brushColor = colorBrush;
    }
    setSimpleColorBrush(simpleColorBrush) {
        this.brushColor = simpleColorBrush;
    }
}