

let keySignature = [
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


let chordsInKey = [
    {
        key: "c_major",
        type: "major",
        title: "C major",
        notes: ["C", "D", "E", "F", "G", "A", "B"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim"],
        chordsInKey_short: ["C", "Dm", "Em", "F", "G", "Am", "B°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "a_minor"
    },
    {
        key: "a_minor",
        type: "natural minor",
        title: "A minor",
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Amin", "Bdim", "Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj"],
        chordsInKey_short: ["Am", "B°", "C", "Dm", "Em", "F", "G"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "c_major"
    }
]