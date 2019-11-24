document.addEventListener('DOMContentLoaded', appStart);


const clapSound = document.querySelector('#clap');
const boomSound = document.querySelector('#boom');
const hihatSound = document.querySelector('#hihat');
const kickSound = document.querySelector('#kick');
const openhatSound = document.querySelector('#openhat');
const rideSound = document.querySelector('#ride');
const snareSound = document.querySelector('#snare');
const tinkSound = document.querySelector('#tink');
const tomSound = document.querySelector('#tom');


let record1Active = false;
const table1 = [];
// const records2 = [];
// const records3 = [];
// const records4 = [];

function appStart() {
    document.body.addEventListener('keypress', playSound);
    // document.body.addEventListener('click', startRecord1);
    // document.body.addEventListener('click', stopRecord1);
    // document.body.addEventListener('click', playRecord1);
    // document.body.addEventListener('click', playAllRecords, false);

    // btnRec = document.querySelector("#record1");
    // btnStop = document.querySelector("#stopRecord1");
    // btnPlay = document.querySelector("#playRecord1");
    // btnPlay = document.querySelector('#playAllRecord');

    addListenerToButtons('#record1', startRecord1);
    addListenerToButtons('#stopRecord1', stopRecord1);
    addListenerToButtons('#playRecord1', playRecord1);
    // addListenerToButtons('#playAllRecords', playAllRecords);

}

function addListenerToButtons(id, itsTask) {
    document
        .querySelector(id)
        .addEventListener('click', itsTask)
}

function playSound(e) {
    if (record1Active) {
        table1.push({
            time: Date.now(),
            code: e.code,
        })
    }
    playSound(e.code);
}


function startRecord1() {
    record1Active = !record1Active;
    if (record1Active) {
        table1.splice(0);
        record1Active = Date.now();
    }
}



// function record1(e) {
//     const time = Date.now() - record1Active;
//     table1.push({
//         code: e.code,
//         time: time,

//     })

// }

// function playSound(sound) {
//     sound.currentTime = 0;
//     sound.play();
// }


function stopRecord1() {
    record1Active = false;
}

function playRecord1() {
    for (let i = 0; i < table1.length; i++) {
        setTimeout(playSound, table1[i].time, table1[i].code);
    }
}
// function playAllRecords() {

// }



function playSound(e) {
    // console.log(e.code);
    switch (e.code) {
        case 'KeyA':
            clapSound.currentTime = 0;
            clapSound.play();
            break
        case 'KeyS':
            boomSound.currentTime = 0;
            boomSound.play();
            break
        case "KeyD":
            hihatSound.currentTime = 0;
            hihatSound.play();
            break
        case 'KeyF':
            kickSound.currentTime = 0;
            kickSound.play();
            break
        case "KeyG":
            openhatSound.currentTime = 0;
            openhatSound.play();
            break
        case 'KeyH':
            rideSound.currentTime = 0;
            rideSound.play();
            break
        case 'KeyJ':
            snareSound.currentTime = 0;
            snareSound.play();
            break
        case "KeyK":
            tinkSound.currentTime = 0;
            tinkSound.play();
            break
        case "KeyL":
            tomSound.currentTime = 0;
            tomSound.play();
            break
    }
}