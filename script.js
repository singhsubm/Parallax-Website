const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#bgrnd",
        start:"top top",
        scrub:1
    }
});

const elem = gsap.utils.toArray(".parallax").forEach(elem => {
    const depth  = elem.dataset.depth;
    const shifting = -(depth*(elem.offsetHeight*0.16));
    tl.to(elem,{
        y:shifting,
        ease:"none"
    },0)
    .to("#overlay",{
        opacity:0,
        ease:"none"
    })
});

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#content",
        start:"top center",
        toggleActions: "play pause resume reverse"
        // scrub:1
    }
});
tl2.from('.block',{
    stagger:.1,
    opacity:0,
    delay:.2,
    duration:1.5,
    ease:'Expo.easeInOut'
})
tl2.from('.image1,.image2,.image3,.image4 ',{
    stagger:.1,
    opacity:0,
    duration:1,
    ease:'Expo.easeInOut'
})
tl2.from('#content p',{
    y:10,
    opacity:0,
    duration:1.5,
    ease:'Expo.easeInOut'
})
tl2.from('.last',{
    y:10,
    opacity:0,
    duration:1.5,
    ease:'Expo.easeInOut'
})