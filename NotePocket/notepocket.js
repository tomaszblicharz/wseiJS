document.addEventListener('DOMContentLoaded', appStart);


const now = new Date();
now;

function appStart() {

    document
        .querySelector('#btnPinNote')
        .addEventListener('click', () =>
            pinNote());

    document
        .addEventListener('change', () =>
            changeColor());

    // let time = document.querySelector('#time')
    // let date = document.querySelector('#date')
    document
        .getElementById("time").innerText = "czas"
    document
        .getElementById("date").innerText = "data";
}


// function pinNote() {
//     let divContainer = document.getElementById('container'),
//         clone = divContainer.cloneNode(true);
//     document.body.appendChild(divContainer.cloneNode(true));
// }
function pinNote() {
    const checkboxValue = document.getElementById('checkbox').checked;
    console.log(checkboxValue);
    if (!checkboxValue) {
        let divContainer = document.getElementById('container'),
            clone = divContainer.cloneNode(true);
        document.getElementById('pushDown').appendChild(divContainer.cloneNode(true));
    } else {
        let divContainer = document.getElementById('container'),
            clone = divContainer.cloneNode(true);
        document.getElementById('pushTop').appendChild(divContainer.cloneNode(true));
    }
}

function changeColor() {
    document.getElementById(
            'container').style.backgroundColor =
        document.getElementById(
            'color').value;
}



// }
// setBrush(brushShape) {
//     this.brushShapeName = brushShape;
// }