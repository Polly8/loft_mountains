
const parallax = document.querySelector(".first-section");
const layers = document.querySelectorAll(".parallax-layer");


function moveLayersByScrolling(wScroll){

    Array.from(layers).forEach(layer => {
        
        var speed = layer.dataset.speed;
        
        const changePosition = wScroll * speed / 10;

        layer.style.transform = `translateY(-${changePosition}%)`;
    });

};

window.addEventListener("scroll", event =>{
    const wScroll = window.pageYOffset;
    moveLayersByScrolling(wScroll);
});


//my version

const blayers = document.querySelectorAll(".b-parallax-img");

function moveLayersByMouse(mouseX, mouseY){

    Array.from(blayers).forEach(blayer => {

        var distance = blayer.dataset.distance;

        const moveBlayerX = mouseX * distance / 10;
        const moveBlayerY = mouseY * distance / 10;
        
        const newPosition = moveBlayerX + "% " + moveBlayerY + "%";

        blayer.style.backgroundPosition = newPosition;

    })

};


window.addEventListener("mousemove", event =>{
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    moveLayersByMouse(mouseX, mouseY);
});



//footer-parallax
/*
function moveLayersByMouse(event){

    let width = window.innerWidth/2,
        height = window.innerHeight/2,
        mouseX = event.clientX,
        mouseY = event.clientY,
        blayer1 = document.querySelector(".b-parallax-layer-1 img"),
        blayer2 = document.querySelector(".b-parallax-layer-2 img"),
        blayer3 = document.querySelector(".b-parallax-layer-3 img"),
        blayer4 = document.querySelector(".b-parallax-layer-4 img"),
        blayer5 = document.querySelector(".b-parallax-layer-5 img"),
        blayer6 = document.querySelector(".b-parallax-layer-6 img"),
        position1 = `${50 - (mouseX - width) * 0.01}% ${50 - (mouseY - height) * 0.1}%`,
        position2 = `${50 - (mouseX - width) * 0.02}% ${50 - (mouseY - height) * 0.2}%`,
        position3 = `${50 - (mouseX - width) * 0.03}% ${50 - (mouseY - height) * 0.4}%`,
        position4 = `${50 - (mouseX - width) * 0.04}% ${50 - (mouseY - height) * 0.6}%`,
        position5 = `${50 - (mouseX - width) * 0.05}% ${50 - (mouseY - height) * 0.5}%`,
        position6 = `${50 - (mouseX - width) * 0.06}% ${50 - (mouseY - height) * 0.7}%`;

    blayer1.style.backgroundPosition = position1;
    blayer2.style.backgroundPosition = position2;
    blayer3.style.backgroundPosition = position3;
    blayer4.style.backgroundPosition = position4;
    blayer5.style.backgroundPosition = position5;
    blayer6.style.backgroundPosition = position6;

};


document.addEventListener("mousemove", moveLayersByMouse);

*/