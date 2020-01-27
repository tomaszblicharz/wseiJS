document.addEventListener('DOMContentLoaded', appStart);


// let counter = 1;

function appStart() {
    document
        .querySelector('#btn')
        .addEventListener('click', () => clone());
}

function clone() {
    let clone = document.querySelector('#container').cloneNode(true);

    // clone = div.cloneNode(true);
    clone.setAttribute('id', newId);
    document.querySelector('p').appendChild(clone);
    // counter++
    // clone.id = "some_id" + counter;
    // document.body.css(background - color, yeelow).appendChild(clone);
    // document.body.appendChild(div.cloneNode(true));
}
// // Create a clone of element with id ddl_1:
// let clone = document.querySelector('#ddl_1').cloneNode(true);

// // Change the id attribute of the newly created element:
// clone.setAttribute('id', newId);

// // Append the newly created element on element p 
// document.querySelector('p').appendChild(clone);