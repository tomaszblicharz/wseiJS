document.addEventListener('DOMContentLoaded', appStart);


let counter = 1,
    notes = [];

// function getNoteObject() {
//     let textarea = querySelector('textarea')
//     return {
//         content: textarea.value,
//         id: clone.id,

//     }
// }

function appStart() {

    document
        .querySelector('#btnPinNote')
        .addEventListener('click', pinNote, false);

    document
        .addEventListener('change', () =>
            changeColor());

    window.addEventListener('load', () =>
        Time());

    // if (!testLocalStorage()) {
    //     let message = " wearesorry"
    // } else {
    //     function saveNote(note) {
    //         localStorage.setItem(note.id, note)
    //         // zapisujemy
    //     }
    // }

    // loadNotes()
}

// function loadNotes() {
//     for (let i = 0; i < localStorage.length; i++) {
//         console.log(localStorage.key(i));
//     }
// }

function pinNote() {





    localStorage.setItem('notes', JSON.stringify(notes))
    notes = JSON.parse(localStorage.getItem('notes'))
    setNoteObject()

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