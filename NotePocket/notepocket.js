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

}



function pinNote() {
    notes.push('container')
    let checkboxValue = document.getElementById('checkbox').checked;
    let divContainer = document.getElementById('container');
    clone = divContainer.cloneNode(true);
    counter++
    clone.id = "container" + counter;

    if (!checkboxValue) {
        document.getElementById('pushDown').appendChild(clone);
    } else {
        document.getElementById('pushTop').appendChild(clone);
    }
}

// function saveText() {
//     if (localStorage) {
//         let key = "latest text annotated";
//         let annotatedtext = document.getElementById("textareaTitle");
//         let annotatextTextStringified = JSON.stringify(annotatedtext);
//         localStorage.setItem(key, annotatedtext.outerHTML);
//     } else {
//         console.log("Error: you don't have localStorage!");
//     }
// }

// function testLocalStorage() {
//     let foo = 'foo';
//     try {
//         localStorage.setItem(foo, foo);
//         localStorage.removeItem(foo);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

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