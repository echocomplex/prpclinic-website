gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1, 
        effects: true
    });
}
else {
    window.location.replace("https://mobile.ru");
}

ScrollTrigger.create({
    trigger: '#prp-therapy',
    marker:true,
    start:"top 50%",
    end:"bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#what-is-prp', { duration: 1, opacity: 0 })
        gsap.to('#prp-therapy', { duration: 1, opacity: 1 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#what-is-prp', { duration: 1, opacity: 1 })
        gsap.to('#prp-therapy', { duration: 1, opacity: 0 })
    },
})

ScrollTrigger.create({
    trigger: '#procedure',
    marker:true,
    start: "top 50%",
    end: "bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#procedure', { duration: 1, opacity: 1 })
        gsap.to('#prp-therapy', { duration: 1, opacity: 0 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#procedure', { duration: 1, opacity: 0 })
        gsap.to('#prp-therapy', { duration: 1, opacity: 1 })
    },
})

ScrollTrigger.create({
    trigger: '#reasons',
    marker:true,
    start: "top 50%",
    end: "bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#reasons', { duration: 1, opacity: 1 })
        gsap.to('#procedure', { duration: 1, opacity: 0 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#reasons', { duration: 1, opacity: 0 })
        gsap.to('#procedure', { duration: 1, opacity: 1 })
    },
})