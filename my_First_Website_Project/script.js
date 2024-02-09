const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function MouseChaserCircle(){
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#mouseChaserCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        

    });
}
MouseChaserCircle();
