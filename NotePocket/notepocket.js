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


function pinNote() {
    let divContainer = document.getElementById('container'),
        clone = divContainer.cloneNode(true);
    document.body.appendChild(divContainer.cloneNode(true));
}

function changeColor() {
    document.getElementById(
            'container').style.backgroundColor =
        document.getElementById(
            'color').value;
}

// function pinTop {
//     const all = documeny.getElementById('all')
//     let newAllItem = document.createElement('container')
//     all.appendChild(newAllItem)
// }

// function pinDown{

// {

// }
// setBrush(brushShape) {
//     this.brushShapeName = brushShape;
// }