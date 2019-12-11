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

// kanal 1
let record1Active = false;
let table1 = [];
let startRecord1Time;
// kanal 2
let record2Active = false;
let table2 = [];
let startRecord2Time;
// kanal 3
let record3Active = false;
let table3 = [];
let startRecord3Time;
// kanal 4
let record4Active = false;
let table4 = [];
let startRecord4Time;


function appStart() {
    document.body.addEventListener('keypress', play);
    Buttons('#record1', startRecord1, );
    Buttons('#stopRecord1', stopRecord1);
    Buttons('#playRecord1', playRecord1);
    Buttons('#record2', startRecord2);
    Buttons('#stopRecord2', stopRecord2);
    Buttons('#playRecord2', playRecord2);
    Buttons('#record3', startRecord3);
    Buttons('#stopRecord3', stopRecord3);
    Buttons('#playRecord3', playRecord3);
    Buttons('#record4', startRecord4);
    Buttons('#stopRecord4', stopRecord4);
    Buttons('#playRecord4', playRecord4);
    Buttons('#playAllRecords', playAllRecords);

}

function Buttons(id, x) {
    document
        .querySelector(id)
        .addEventListener('click', x)
}


//Kanal 1

function play(e) {
    if (record1Active) {
        table1.push({
            time: Date.now(),
            code: e.code,
        })
    }
    if (record2Active) {
        table2.push({
            time: Date.now(),
            code: e.code,
        })
    }
    if (record3Active) {
        table3.push({
            time: Date.now(),
            code: e.code,
        })
    }
    if (record4Active) {
        table4.push({
            time: Date.now(),
            code: e.code,
        })
    }
    playSound(e.code);
}

function startRecord1() {
    startRecord1Time = Date.now();
    record1Active = true;
    table1 = [];
    record1.disabled = true;
    stopRecord1.disabled = false;
    playRecord1.disabled = false;
}


function stopRecord1() {
    record1Active = false;
    record1.disabled = false;
    stopRecord1.disabled = true;
    playRecord1.disabled = false;
}

function playRecord1() {
    if (!record1Active) {
        for (let i = 0; i < table1.length; i++) {
            setTimeout(playSound, table1[i].time - startRecord1Time, table1[i].code);
        }
    }
    record1.disabled = false;
    stopRecord1.disabled = false;
    playRecord1.disabled = true;
}
//Kanal 2

function startRecord2() {
    startRecord2Time = Date.now();
    record2Active = true;
    table2 = [];
}


function stopRecord2() {
    record2Active = false;
}

function playRecord2() {
    if (!record2Active) {
        for (let i = 0; i < table2.length; i++) {
            setTimeout(playSound, table2[i].time - startRecord2Time, table2[i].code);
        }
    }
}

//Kanal 3

function startRecord3() {
    startRecord3Time = Date.now();
    record3Active = true;
    table3 = [];
}


function stopRecord3() {
    record3Active = false;
}

function playRecord3() {
    if (!record3Active) {
        for (let i = 0; i < table3.length; i++) {
            setTimeout(playSound, table3[i].time - startRecord3Time, table3[i].code);
        }
    }
}
//Kanal 4


function startRecord4() {
    startRecord4Time = Date.now();
    record4Active = true;
    table4 = [];
    record4.disabled = true;
    stopRecord4.disabled = false;
    playRecord4.disabled = false;
}


function stopRecord4() {
    record4Active = false;
    record4.disabled = false;
    stopRecord4.disabled = true;
    playRecord4.disabled = false;
}

function playRecord4() {
    if (!record4Active) {
        for (let i = 0; i < table4.length; i++) {
            setTimeout(playSound, table4[i].time - startRecord4Time, table4[i].code);
        }
        record4.disabled = false;
        stopRecord4.disabled = false;
        playRecord4.disabled = true;
    }
}

function playAllRecords() {
    playRecord1();
    playRecord2();
    playRecord3();
    playRecord4();
}

function playSound(key) {
    console.log(key)
    switch (key) {
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