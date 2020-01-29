// notatki
// tablica notatek (obiektów klasy Note)
let notesArr = []

// klasa notatki
class Note {
    constructor(title, note, color, checkbox) {
        this.title = title;
        this.note = note;
        this.color = color;
        this.checkbox = checkbox

    }
}
// zapisanie do localStorage
localStorage.setItem('notes', JSON.stringify(notesArr))

// odczyt z localStorage
notesArr = JSON.parse(localStorage.getItem('notes'))