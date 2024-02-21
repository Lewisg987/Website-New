gsap.registerPlugin(ScrollTrigger);

gsap.to(".football", {
    x: 500,
    duration: 3,
    scrollTrigger: {
        start: "80% bottom",
        end: "30% bottom",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
    }
})

gsap.to(".football", {
    scale: 2,
    duration: 3,
    scrollTrigger: {
        start: "80% bottom",
        end: "30% bottom",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
    }
})

gsap.to(".f-info", {
    scale: 3,
    duration: 3,
    scrollTrigger: {
        start: "80% bottom",
        end: "30% bottom",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
    }
})

gsap.to(".f-info", {
    x: -775,
    duration: 3,
    scrollTrigger: {
        start: "80% bottom",
        end: "30% bottom",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
    }
})
