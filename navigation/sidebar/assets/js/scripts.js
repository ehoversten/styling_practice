let sidebarMenu = document.getElementById("side-menu");

let btnClose = document.getElementById("close");
let btnOpen = document.getElementById("open");


btnOpen.addEventListener("click", function() {
    sidebarMenu.style.width = "350px";
    // sidebarMenu.classList.remove("hide"); 
})

btnClose.addEventListener("click", function() {
    sidebarMenu.style.width = "0px";
    // sidebarMenu.classList.add("hide"); 
})