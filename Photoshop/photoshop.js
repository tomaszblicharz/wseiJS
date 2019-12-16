class Photoshop {
    constructor(targetElementId) {
        this.canvas = document.querySelector('#' + targetElementId)
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.canvas.addEventListener('touchstart', (e) => this.onTouchMove(e));
        // this.canvas.addEventListener('touchend', (e) => this.onTouchMove(e));
        this.brushShapeName = 'square', 'circle', 'emptyCircle', 'transparentMode', 'normalMode';
        this.pickColor = 'colorBlack', 'colorGreen', 'colorYellow', 'colorGreen', 'colorRed';
        this.pickSize = 'small', 'medium', 'large';
        // this.brushColor = document.querySelector('.paint-color');
    }



    onTouchMove(e) {
        // pobierz pędzel
        this.brushShape = new Brush(this.brushShapeName, this.brushColor, this.brushSize, this.pickColor)
        const brush = this.brushShape.getBrush();
        // ustal położenie
        let x = e.touches[0].clientX - this.canvas.offsetLeft;
        let y = e.touches[0].clientY - this.canvas.offsetTop;
        // brush.style.top = `${y}px`;
        // brush.style.left = `${x}px`;
        this.ctx.strokeStyle = this.brushShape.colorBrush;
        this.ctx.fillStyle = this.brushShape.colorBrush;
        // this.ctx.lineWidth = 10;
        this.ctx.lineWidth = this.brushShape.sizeBrush;
        // this.ctx.lineWidth = this.btnSize.value

        // this.ctx.lineWidth = radius;

        //namaluj

        switch (this.brushShapeName) {
            case 'square':
                this.ctx.fillRect(x, y, 15, 15);
                this.ctx.stroke()
                // this.ctx.lineWidth()
                break;
            case 'circle':
                this.ctx.beginPath();
                this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
                this.ctx.fill()
                // this.ctx.lineWidth()
                break;
            case 'emptyCircle':
                this.ctx.beginPath();
                this.ctx.arc(x, y, 10, 0, 2 * Math.PI);
                this.ctx.stroke()
                // this.ctx.lineWidth()
                break;
            case 'transparentMode':
                this.ctx.globalAlpha = "0.2";
                break;
            case 'normalMode':
                this.ctx.globalAlpha = "1";
                break;
        }

        //wybierz kolor
        switch (this.pickColor) {
            case 'colorBlack':
                this.ctx.fillStyle = 'black'
                this.ctx.strokeStyle = 'black'
                break;
            case 'colorRed':
                this.ctx.fillStyle = 'red'
                this.ctx.strokeStyle = 'red'
                break;
            case 'colorGreen':
                this.ctx.fillStyle = 'green'
                this.ctx.strokeStyle = 'green'
                break;
            case 'colorYellow':
                this.ctx.fillStyle = 'yellow'
                this.ctx.strokeStyle = 'yellow'
                break;
            case 'colorBlue':
                this.ctx.fillStyle = 'blue'
                this.ctx.strokeStyle = 'blue'
                break;




        }
        // switch (this.pickSize) {
        //     case 'small':
        //         this.ctx.lineWidth = 5;

        //         break;
        //     case 'medium':
        //         this.ctx.lineWidth = 15;

        //         break;
        //     case 'large':
        //         this.ctx.lineWidth = 30;

        //         break;
        // }
        // console.log(this.canvas.offsetTop)

    }
    setBrush(brushShape) {
        this.brushShapeName = brushShape;
    }
    setColorBrush(colorBrush) {
        this.brushColor = colorBrush;
    }
    setSimpleColorBrush(simpleColorBrush) {
        this.pickColor = simpleColorBrush;
    }
    setSizeBrush(sizeBrush) {
        this.brushSize = sizeBrush;
    }
    // setSimpleSize(simpleSizeBrush) {
    //     this.pickSize = simpleSizeBrush;
    // }
}