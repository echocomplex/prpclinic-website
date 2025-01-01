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
    window.location.replace("mobile");
}

if (window.innerHeight > window.innerWidth) {
    window.location.replace("mobile");
}

window.addEventListener("resize", () => {
    if (window.innerHeight > window.innerWidth) {
        window.location.replace("mobile");
    }
});

document.getElementById('logo').addEventListener('click', function() {
    window.location.href = '../index.html';
});

document.getElementById('note').addEventListener('click', function() {
    window.location.href = '../index.html';
});

gsap.to("#specialist", { opacity: 1 });

ScrollTrigger.create({
    trigger: '#consultations',
    marker:true,
    start:"top 50%",
    end:"bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#specialist', { duration: 1, opacity: 0 })
        gsap.to('#consultations', { duration: 1, opacity: 1 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#specialist', { duration: 1, opacity: 1 })
        gsap.to('#consultations', { duration: 1, opacity: 0 })
    },
});

ScrollTrigger.create({
    trigger: '#traumotology',
    marker:true,
    start:"top 50%",
    end:"bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#consultations', { duration: 1, opacity: 0 })
        gsap.to('#traumotology', { duration: 1, opacity: 1 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#consultations', { duration: 1, opacity: 1 })
        gsap.to('#traumotology', { duration: 1, opacity: 0 })
    },
});