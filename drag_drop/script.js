let chords = [
    "C",
    "C#/Db", 
    "D",
    "D#/Eb",
    "E",
    "F",
    "F#/Gb",
    "G",
    "G#/Ab",
    "A",
    "A#/Bb",
    "B"
];


let chordType = [
    "major",
    "minor",
    "augmented",
    "dimenshed",
    "maj7",
    "min7",
    "7",
    "sus2",
    "sus4",
    "add9",
    "sixth"
];

// Chord progression container
let progressionList = [];

// const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");
const emptyContainer = document.querySelector(".empty-container");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);

const dragChords = document.querySelectorAll(".card");
console.log(dragChords);
// add listeners to each card
dragChords.forEach(chord => chord.addEventListener("dragstart", dragStart));;

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
};

// Drag Functions
function dragStart(e) {
    console.log('drag start');
    // console.log(e);
    // console.log("******");
    // console.log(e.target);
    // console.log(e.target.firstElementChild.textContent);

    let text = e.target.firstElementChild.textContent
    let obj = e.target;

    console.log("--------");
    console.log(obj);

    e.dataTransfer.setData('text/plain', text);
    // e.dataTransfer.setData('application/json', JSON.stringify(text));
    obj.setAttribute('data-chord', text);
}

function dragEnd() {
    console.log('drag end');
    this.className = 'fill';
}

function dragOver(evt) {
    evt.preventDefault();
    console.log('drag over');
}

function dragEnter(evt) {
    evt.preventDefault();
    console.log('drag enter');

    this.className += ' hovered';
}

function dragLeave() {
    console.log('drag leave');
    this.className = 'empty';
}

function dragDrop(e) {
    console.log('dropped');

    let dropzone = e.target;
    console.log(dropzone);
    // if(!dropzone.classList.contains('dropzone')) return;

    e.preventDefault();
    console.log(e.dataTransfer);
    let data = e.dataTransfer.getData('text/plain');
    // let data = e.dataTransfer.getData('application/json');
    console.log(`transferred data: ${data}`);

    let draggedItem = document.querySelector(`[data-chord="${data}"]`);
    let clone = draggedItem.cloneNode(true);
    this.className = 'empty';
    this.classList.add('selected');
    
    console.log(clone);
    this.append(clone);
}

function add() {
    let newEmptyContainer = document.createElement("div");
    newEmptyContainer.className = "empty";
    newEmptyContainer.addEventListener('dragover', dragOver);
    newEmptyContainer.addEventListener('dragenter', dragEnter);
    newEmptyContainer.addEventListener('dragleave', dragLeave);
    newEmptyContainer.addEventListener('drop', dragDrop);
    emptyContainer.append(newEmptyContainer);
}

function subtract() {
    let rmvEmptyContainer = document.querySelector(".empty");
    rmvEmptyContainer.remove();
}

