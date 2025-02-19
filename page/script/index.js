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

let footerBlock = document.getElementById("footer-contacts");

if (window.innerHeight > window.innerWidth) {
    footerBlock.style.marginBottom = "40vw";
}
else {
    footerBlock.style.marginBottom = "3vw";
}

window.addEventListener("resize", () => {
    if (window.innerHeight > window.innerWidth) {
        footerBlock.style.marginBottom = "40vw";
    }
    else {
        footerBlock.style.marginBottom = "3vw";
    }
});

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
});

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
});

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
});

ScrollTrigger.create({
    trigger: '#list-of-serivces',
    marker:true,
    start: "top 50%",
    end: "bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#list-of-serivces', { duration: 1, opacity: 1 })
        gsap.to('#reasons', { duration: 1, opacity: 0 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#list-of-serivces', { duration: 1, opacity: 0 })
        gsap.to('#reasons', { duration: 1, opacity: 1 })
    },
});

ScrollTrigger.create({
    trigger: '#contacts-and-appointment',
    marker:true,
    start: "top 50%",
    end: "bottom 0%", 
  
    onEnter: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#FFF' })
        gsap.to('#contacts-and-appointment', { duration: 1, opacity: 1 })
        gsap.to('#list-of-serivces', { duration: 1, opacity: 0 })
    },
    
    onLeaveBack: () => {
        gsap.to('body', { duration: 1, backgroundColor: '#77A6F7' })
        gsap.to('#contacts-and-appointment', { duration: 1, opacity: 0 })
        gsap.to('#list-of-serivces', { duration: 1, opacity: 1 })
    },
});

document.getElementById('gotoAppointment').addEventListener('click', function() {
    window.open('appointment/index.html');
});

document.getElementById('gotoVK').addEventListener('click', function() {
    window.open('https://vk.com/prpclinicspb');
});

document.getElementById('gotoWhatsapp').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send/?phone=79119201428');
});

document.getElementById('gotoPrice').addEventListener('click', function() {
    window.open('price/index.html');
});