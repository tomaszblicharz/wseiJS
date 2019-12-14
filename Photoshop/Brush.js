class Brush {
    constructor(shape, colorBrush, simpleColorBrush) {
        this.shape = shape;
        this.brush = document.createElement('div');
        this.colorBrush = colorBrush;
        this.simpleColorBrush = simpleColorBrush;

        // this.setStyleBrush(shape);
    }

    getBrush() {
        return this.brush
    }

    // setStyleBrush(className) {
    //     this.brush.classList.add('brush', `${className}-brush`);
    // }
}