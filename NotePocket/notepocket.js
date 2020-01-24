document.addEventListener('DOMContentLoaded', appStart);


function appStart() {

    document
        .querySelector('#btnPinNote')
        .addEventListener('click', pinNote, false);

    document
        .addEventListener('change', () =>
            changeColor());

    window.addEventListener('load', () =>
        Time());


    createNote()
}

function pinNote() {
    let checkboxValue = document.getElementById('checkbox').checked;

    let divContainer = document.getElementById('container');
    clone = divContainer.cloneNode(true);

    console.log(checkboxValue);

    if (!checkboxValue) {

        document.getElementById('pushDown').appendChild(divContainer.cloneNode(true));

    } else {

        document.getElementById('pushTop').appendChild(divContainer.cloneNode(true));
    }
}

function createNote() {
    let divAll = document.createElement('div');
    let divOptions = document.createElement('div');
    let divContainer = document.createElement('div');
    let divTitle = document.createElement('div');
    let divNote = document.createElement('div');
    let textareaTitle = document.createElement('textarea');
    let textareaNote = document.createElement('textarea');


    divAll.classList.add('all')
    divOptions.classList.add('options')
    divContainer.classList.add('container')
    divTitle.classList.add('title')
    divNote.classList.add('note')
    textareaTitle.classList.add('textarea')
    textareaNote.classList.add('textarea')


    divAll.appendChild(divOptions);
    divAll.appendChild(divContainer);
    divContainer.appendChild(divTitle);
    divTitle.appendChild(textareaTitle);
    divContainer.appendChild(divNote);
    divNote.appendChild(textareaNote);





    document.body.appendChild(divContainer);
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