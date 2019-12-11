// notatki
// tablica notatek (obiektów klasy Note)
let notesArr = []

// klasa notatki
class Note {
    constructor(title = '', description = '') {
        this.title = title
        this.description = description
        this.color = 'red'
        this.created = Date().toISOString()
        this.pinned = false
    }
}
// zapisanie do localStorage
localStorage.setItem('notes', JSON.stringify(notesArr))

// odczyt z localStorage
notesArr = JSON.parse(localStorage.getItem('notes'))