let musicKey = document.querySelector(".musical-key");
let activeKey = document.getElementById("active-key");
let keyChords = document.querySelector(".key-chords");

musicKey.addEventListener("click", function(evt) {
    let keySelect = evt.target;
    console.log(keySelect);

    activeKey.classList.remove('hide')
    musicKey.style.transform = 'translateY(300px)'; 
    keyChords.style.opacity = 1; 
})