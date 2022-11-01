

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
    },
    {
        key: "g_major",
        type: "major",
        title: "G major",
        notes: ["G", "A", "B", "C", "D", "E", "F#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj", "Emin", "F#dim"],
        chordsInKey_short: ["G", "Am", "Bm", "C", "D", "Em", "F#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "e_minor"
    },
    {
        key: "e_minor",
        type: "natural minor",
        title: "E minor",
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Emin", "F#dim", "Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj"],
        chordsInKey_short: ["Em", "F#°", "G", "Am", "Bm", "C", "D"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "g_major"
    },
    {
        key: "d_major",
        type: "major",
        title: "D major",
        notes: ["D", "E", "F#", "G#", "A", "B", "C"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Dmaj", "Emin", "F#maj", "G#maj", "Amin", "Bmin", "Cdim"],
        chordsInKey_short: ["G#", "Am", "Bm", "C", "D", "Em", "F#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "b_minor"
    },
    {
        key: "b_minor",
        type: "natural minor",
        title: "E minor",
        notes: ["B", "C", "D", "E", "F#", "G#", "A"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Bmin", "Cdim", "Dmaj", "Emin", "F#min", "Gmaj", "Amaj"],
        chordsInKey_short: ["Bm", "C°", "D", "Em", "F#m", "G#", "A"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "d_major"
    }
]