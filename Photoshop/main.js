document.addEventListener('DOMContentLoaded', appStart);

// let brushType = 'square';
// function appStart(){
//     canvas = document.querySelector('#canvas');
//     canvas.addEventListener('touchstart', onTouchStart)
//     canvas.addEventListener('touchend', onTouchEnd)
//     canvas.addEventListener('touchmove', onTouchMove)

//     document
//         .querySelector('#squareBtn')
//         .addEventListener('click', () => changeBrush('square'))

//     document
//         .querySelector('#circleBtn')
//         .addEventListener('click' , () => changeBrush('circle'))
// }

// function changeBrush(typeBrush){
//     brushType = typeBrush;
// }

// function onTouchMove(e){
//     // pobierz pędzel
//     const brush = getBrush();
//     // ustal położenie
//     let x = e.touches[0].clientX - canvas.offsetLeft;
//     let y = e.touches[0].clientY - canvas.offsetTop;
//     brush.style.top = `${y}px`;
//     brush.style.left =`${x}px`;
//     //namaluj
//     canvas.appendChild(brush);
// }

// function getBrush(){
//     const div = document.createElement('div');
//     div.classList.add('brush', `${brushType}-brush`);
//     return div;
// }

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