let musicKey = document.querySelector(".musical-key");
let activeKey = document.getElementById("active-key");

musicKey.addEventListener("click", function(evt) {
    let keySelect = evt.target;
    console.log(keySelect);

    activeKey.classList.remove('hide')
})