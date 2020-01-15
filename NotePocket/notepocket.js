document.addEventListener('DOMContentLoaded', appStart);



function appStart() {
    document
        .querySelector('#btnPinNote')
        .addEventListener('click', () =>
            pinNote());


}

function pinNote() {
    let divContainer = document.getElementById('container'),
        clone = divContainer.cloneNode(true);
    document.body.appendChild(divContainer.cloneNode(true));

}