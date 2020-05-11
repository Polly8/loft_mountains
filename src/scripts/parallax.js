
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


