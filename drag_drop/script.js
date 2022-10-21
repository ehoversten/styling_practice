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

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


let dragStartIndex;

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
};

// Drag Functions
function dragStart() {
    console.log('drag start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
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

function dragDrop() {
    console.log('dropped');
    this.className = 'empty';
    this.append(fill);
}


// function createProgression() {

// }

