class Brush {
    constructor(brushShape, colorBrush, simpleColorBrush, sizeBrush, simpleSizeBrush) {
        this.brushShape = brushShape;
        this.colorBrush = colorBrush;
        this.simpleColorBrush = simpleColorBrush;
        this.sizeBrush = sizeBrush;
        this.simpleSizeBrush = simpleSizeBrush;

        this.brush = document.createElement('div');
        // this.setStyleBrush(shape);
    }


    getBrush() {
        return this.brush
    }


}