
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(dets){
        // let diff = dets.clientY - elem.getBoundingClientRect().top();
        // console.log(dets)
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
        });
    });
});




// Start - global variables used in mouseChaserCircle
let xprev = 0;
let yprev = 0;
let xScale = 1;
let yScale = 1;
let cirleSizeToDefault = 0;
let timeout;
//  End - global variables used in mouseChaserCircle

function cursorChaserCircle() {
    clearTimeout(timeout);  // when mouse is moving value of timeout will be zero.
    window.addEventListener("mousemove", function(dets){
        xScale = gsap.utils.clamp(.8, 1.2 , dets.clientX - xprev);
        yScale = gsap.utils.clamp(.8, 1.2 , dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        document.getElementById("mouseChaserCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
        
        // timout will run after 100msecs and if the mouse is not moving it will scale the circle to 1 (default size).
        timeout = setTimeout(function(){
            document.getElementById("mouseChaserCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 100)

    })
}

cursorChaserCircle();
