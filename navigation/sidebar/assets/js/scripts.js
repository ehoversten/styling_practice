let sidebarMenu = document.getElementById("side-menu");

let btnClose = document.getElementById("close");
let btnOpen = document.getElementById("open");


btnOpen.addEventListener("click", function() {
    console.log("Open");
    sidebarMenu.classList.add("active"); 
})

btnClose.addEventListener("click", function() {
    console.log("Close");
    sidebarMenu.classList.remove("active"); 
})