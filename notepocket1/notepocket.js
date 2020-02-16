document.addEventListener('DOMContentLoaded', appStart);


let counter,
    notes = [];

function appStart() {
    counter = localStorage.getItem('counter');
    document
        .querySelector('#btnPinNote')
        .addEventListener('click', pinNote, false);

    document
        .addEventListener('change', () =>
            changeColor());

    window.addEventListener('load', () =>
        Time());


    loadNote()
}


function pinNote() {


    let checkboxValue = document.getElementById('checkbox').checked;
    let divContainer = document.getElementById('container');
    // let checkboxValue = document.querySelector('checkbox').checked;
    // let divContainer = document.getElementsByName('container');
    // let divContainer = document.getElementsByClassName('container');

    clone = divContainer.cloneNode(true);
    counter++
    let id = counter;
    clone.id = "container" + counter;

    if (!checkboxValue) {
        document.getElementById('pushDown').appendChild(clone);

    } else {
        document.getElementById('pushTop').appendChild(clone);

    }

    setNoteObject()
    createDeleteBtn(clone, id)
    saveNote()
}

function createDeleteBtn(clone, id) {

    let deletebtn = document.createElement('button')
    deletebtn.classList.add('deleteBtn')
    deletebtn.addEventListener('click', () => removeNote(clone, id));
    clone.appendChild(deletebtn)
    // document.querySelector('#deleteBtn')

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
    localStorage.getItem("notes")
}

function saveNote() {
    localStorage.setItem('notes', JSON.stringify(notes))
}


function removeNote(clone, id) {
    clone.parentNode.removeChild(clone);
    let result = notes.find(obj => {
        return obj.id === id;
    });

    let index = notes.indexOf(result);
    if (index > -1) {
        notes.splice(index, 1);
    }
    counter--;
    localStorage.setItem('notes', JSON.stringify(notes))

}




function loadNote() {
    // if (localStorage.getItem("notes") != null) {
    //     notes = JSON.parse(localStorage.getItem("notes"))
    // }

    for (let i = 0; i < localStorage.length; i++) {
        let notes = JSON.parse(localStorage.getItem("notes"))
        // pushDiv.innerHTML += `${notes}`
        notes.forEach(element => {
           let container  = document.createElement('div')
           let title  = document.createElement('div')
           let note  = document.createElement('div')
           let clock  = document.createElement('div')
           let time  = document.createElement('div')
           let date  = document.createElement('div')
           let textareaTitle  = document.createElement('textarea')
           let textareaNote  = document.createElement('textarea')

           container.classList.add('container1')
           title.classList.add('title1')
           note.classList.add('note1')
           clock.classList.add('clock1')
           time.classList.add('time1')
           date.classList.add('date1')
           textareaNote.classList.add('textareaNote1')
           textareaTitle.classList.add('textareaTitle1')

           container.appendChild(title)
           title.appendChild(textareaTitle)
            container.appendChild(note)
            note.appendChild(textareaNote)
            container.appendChild(clock)
            clock.appendChild(time)
            clock.appendChild(date)

            


        });
        

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

    document.getElementsByClassName("time").innerHTML = hour + ":" + minutes + ":" + seconds;
    document.getElementsByClassName("date").innerHTML = day + "." + month + "." + year;

    setTimeout("Time()", 1000);

}