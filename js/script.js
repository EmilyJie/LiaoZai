gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".panel1",
    start: "top top", 
    pin: true, 
    pinSpacing: false 
});

let timeLine_page2 = new gsap.timeline({
    scrollTrigger: {
    trigger: ".panel2",
    yoyo: true,
    pin: true, // pin the trigger element while active
    start: "bottom bottom", // when the top of the trigger hits the top of the viewport
    end: "100%", // end after scrolling 500px beyond the start
    scrub: true,
    }
});