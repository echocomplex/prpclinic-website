gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1, 
        effects: true
    });
}

// ScrollTrigger.create({
//     trigger: '#what-is-prp',
//     markers: true,
//     start: "top 50%",
//     end: "bottom 0%", 
  
//     onEnter: () => {
//       gsap.to('#what-is-prp', { duration: 0.5, opacity: 1 })
//     },
    
//     onLeaveBack: () => {
//       gsap.to('#what-is-prp', { duration: 0.5, opacity: 0 })
//     }, 
// })

ScrollTrigger.create({
    trigger: '#prp-therapy',
    markers: true,
    start:"top 50%",
    end:"bottom 0%", 
  
    onEnter: () => {
        gsap.to('#what-is-prp', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#what-is-prp img ', { duration: 1, opacity: 0 })
        gsap.to('#what-is-prp b', { duration: 1, opacity: 0 })
        gsap.to('#prp-therapy', { duration: 1, backgroundColor: '#FFF'})
        gsap.to('#prp-therapy h1', { duration: 1, color: '#77A6F7'})
        gsap.to('#prp-therapyinfo', { duration: 1, opacity: 1 })
        gsap.to('#prp-therapyinfo p', { duration: 1, color: '#77A6F7'})
    },
    
    onLeaveBack: () => {
        gsap.to('#what-is-prp', { duration: 1, backgroundColor: '#77A6F7'})
        gsap.to('#what-is-prp img', { duration: 1, opacity: 1 })
        gsap.to('#what-is-prp b', { duration: 1, opacity: 1 })
        gsap.to('#prp-therapyinfo', { duration: 1, opacity: 0 })
        gsap.to('#prp-therapy', { duration: 1, backgroundColor: '#77A6F7'})
        gsap.to('#prp-therapy h1', { duration: 1, color: '#77A6F7'})
        gsap.to('#prp-therapyinfo p', { duration: 1, color: '#FFF'})
    },
  
    
})