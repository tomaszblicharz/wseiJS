document.addEventListener('DOMContentLoaded', appStart);


function appStart() {
    const myPs = new Photoshop('canvas');

    document
        .querySelector('#squareBtn')
        .addEventListener('click', () => {
            myPs.setBrush('square')
        })

    document
        .querySelector('#circleBtn')
        .addEventListener('click', () => {
            myPs.setBrush('circle')
        })
}

function changeBrush(typeBrush) {
    brushType = typeBrush;
}


function getBrush() {
    const div = document.createElement('div');
    div.classList.add('brush', `${brushType}-brush`);
    return div;
}