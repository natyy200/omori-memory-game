const principal = document.querySelector(".principal");

const music = new Audio("../sounds/omori.mp3");
music.volume = 0.3;

principal.addEventListener('mouseover', ()=>music.play());