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
    // document
    //     .getElementById("time").innerText = "czas"
    // document
    //     .getElementById("date").innerText = "data";



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

function Time() {
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth() + 1;
    if (month < 10) month = "0" + month;

    let year = time.getFullYear();

    let hour = time.getHours();
    if (hour < 10) hour = "0" + hour;

    let minutes = time.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    let seconds = time.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = day + "." + month + "." + year;

    setTimeout("Time()", 1000);


}

// }
// setBrush(brushShape) {
//     this.brushShapeName = brushShape;
// }