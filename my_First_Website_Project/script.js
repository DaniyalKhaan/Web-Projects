const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let xprev = 0;
let yprev = 0;

let xScale = 1;
let yScale = 1;


function circleCompressor(){
    window.addEventListener("mouseove", function(dets){


        xScale = gsap.util.clamp(.8,1.2, dets.clientX - xprev)
        yScale = gsap.util.clamp(.8,1.2, dets.clientY - yprev)
        xprev = dets.clientX;
        yprev = dets.clientY;
        mouseCursorChaser(xScale, yScale)
        
    })

}


function mouseCursorChaser(xScale, yScale){
    window.addEventListener("mousemove", function(getDetails){
        this.document.getElementById("mouseChaserCircle").style.transform = `translate(${getDetails.clientX}px,${getDetails.clientY}px) scale(${xScale},${yScale})`;
    })
}
// circleCompressor();
mouseCursorChaser();
