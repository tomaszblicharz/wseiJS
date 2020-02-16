document.addEventListener('DOMContentLoaded', appStart);


let counter;
let notes = [];



function appStart() {
    if (!JSON.parse(localStorage.getItem("notes"))) {
        localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        notes = JSON.parse(localStorage.getItem("notes"))
    }

    counter = 0;
    document
        .querySelector('#btnPinNote')
        .addEventListener('click', pinNote, false);

    document
        .addEventListener('change', () =>
            changeColor());

   
        Time()

    loadNote()
}


function pinNote() {
    setNoteObject()
    saveNote()
    loadNote()
}

function createDeleteBtn(container, id) {
    let deletebtn = document.createElement('button')
    deletebtn.classList.add('deleteBtn')
    deletebtn.addEventListener('click', () => removeNote(id));
    container.appendChild(deletebtn)
    // document.querySelector('#deleteBtn')
}

function setNoteObject() {
    let textarea = document.querySelector('.textareaNote').value
    let title = document.querySelector('.textareaTitle').value
    let color = document.querySelector('#color').value
    let pinned = document.querySelector('#checkbox').checked
    let time = document.querySelector('.time')
    let date = document.querySelector('.date').value

    const note = {
        title: title,
        content: textarea,
        color: color,
        checkbox: pinned,
        id: counter,
        time: new Date (),
        date:date,
    }
    notes.push(note);
    localStorage.getItem("notes")
    counter++
}

function saveNote() {
    localStorage.setItem('notes', JSON.stringify(notes))
}


function removeNote(id) {
    let result = notes.find(obj => {
        return obj.id === id;
    });

    let index = notes.indexOf(result);
    if (index > -1) {
        notes.splice(index, 1);
    }

    localStorage.setItem('notes', JSON.stringify(notes))
    loadNote()
}

function clearPushDiv() {
    let pushDiv = document.querySelector('#pushDiv')
    let pushTop = document.createElement('div')
    let pushDown = document.createElement('div')
    pushTop.id = "pushTop"
    pushDown.id = "pushDown"

    document.querySelector('#pushTop').remove()
    document.querySelector('#pushDown').remove()

    pushDiv.appendChild(pushTop)
    pushDiv.appendChild(pushDown)
}



function loadNote() {
    clearPushDiv()
    // if (localStorage.getItem("notes") != null) {
    //     notes = JSON.parse(localStorage.getItem("notes"))
    // }

    let notes = JSON.parse(localStorage.getItem("notes"))
    // pushDiv.innerHTML += `${notes}`
    notes.forEach(element => {
        let container = document.createElement('div')
        let title = document.createElement('div')
        let note = document.createElement('div')
        let clock = document.createElement('div')
        let time = document.createElement('div')
        let date = document.createElement('div')
        let textareaTitle = document.createElement('textarea')
        let textareaNote = document.createElement('textarea')

        textareaTitle.innerHTML = element.title
        textareaNote.innerHTML = element.content
        container.style.backgroundColor = element.color
        time.innerHTML = element.time
        date.innerHTML = element.date


        container.classList.add('container')
        title.classList.add('title')
        note.classList.add('note')
        clock.classList.add('clock')
        time.classList.add('time')
        date.classList.add('date')
        textareaNote.classList.add('textareaNote')
        textareaTitle.classList.add('textareaTitle')



        container.appendChild(title)
        title.appendChild(textareaTitle)
        container.appendChild(note)
        note.appendChild(textareaNote)
        container.appendChild(clock)
        clock.appendChild(time)
        clock.appendChild(date)
        createDeleteBtn(container, element.id)

        if (!element.checkbox) {
            document.querySelector('#pushDown').appendChild(container)
        } else {
            document.querySelector('#pushTop').appendChild(container)
        }
    });



}


function changeColor() {
    document.querySelector(
            '.container').style.backgroundColor =
        document.querySelector(
            '#color').value;
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

    document.querySelector(".time").innerHTML = hour + ":" + minutes + ":" + seconds;
    document.querySelector(".date").innerHTML = day + "." + month + "." + year;

    setTimeout("Time()", 1000);

}