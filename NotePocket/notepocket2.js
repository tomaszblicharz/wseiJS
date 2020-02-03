document.addEventListener('DOMContentLoaded', appStart);


let counter = 0,
    notes = [];


function appStart() {

    document
        .querySelector('#btnPinNote')
        .addEventListener('click', pinNote, false);

    document
        .addEventListener('change', () =>
            changeColor());

    window.addEventListener('load', () =>
        Time());

    // loadNotes()

}


function pinNote() {
    let checkboxValue = document.getElementById('checkbox').checked;
    let divContainer = document.getElementById('container');
    clone = divContainer.cloneNode(true);
    counter++
    clone.id = "container" + counter;

    if (checkboxValue == 1) {
        document.getElementById('pushTop').appendChild(clone);

    } else if (checkboxValue == 0) {
        document.getElementById('pushDown').appendChild(clone);

    }
    setNoteObject()
    saveNote()


    createDeleteBtn()
}


function setNoteObject() {
    let textarea = document.querySelector('#textareaNote').value
    let title = document.querySelector('#textareaTitle').value
    let color = document.querySelector('#color').value
    let pinned = document.querySelector('#checkbox').checked
    const note = {
        title: title,
        content: textarea,
        color: color,
        checkbox: pinned,
        id: counter,
    }
    notes.push(note);
}

function createDeleteBtn() {

    let deletebtn = document.createElement('button')
    deletebtn.classList.add('deleteBtn')
    clone.appendChild(deletebtn)
    deletebtn.addEventListener('click', deleteNote, false)
}

function saveNote() {
    console.log(notes)
    let str = JSON.stringify(notes)
    localStorage.setItem('notes', str)
}

// function loadNotes() {
//     let str = localStorage.getItem('notes');
//     notes = JSON.parse(str)
//     if (!notes) {
//         notes = [];
//     }
// }


// function loadNotes() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let noteObject = JSON.parse(
//             localStorage.getItem(
//                 localStorage.key(i)
//             )
//         );
//     }

// }

function deleteNote() {
    document.querySelector('#deleteBtn')
    this.parentElement.remove()
    localStorage.removeItem(note.id)
    // notes.splice()
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