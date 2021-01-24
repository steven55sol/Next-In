let iconMenu = document.getElementById("icon-menu");
let menu = document.getElementById("menu");
let close = document.getElementById("icon-close");

iconMenu.addEventListener('click', () =>{
    
   menu.style.transform="translateX(0px)";
   iconMenu.style.display="none";
   close.style.display="block"; 
});

close.addEventListener('click', () =>{
        menu.style.transform="translateX(-1540px)"; 
        iconMenu.style.display="block";
        close.style.display="none";
});

