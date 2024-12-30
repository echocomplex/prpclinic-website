gsap.registerPlugin(ScrollTrigger);

if (ScrollTrigger.isTouch == 1) {
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

document.getElementById('gotoVK').addEventListener('click', function() {
    window.open('https://vk.com/prpclinicspb');
});

document.getElementById('gotoWhatsapp').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send/?phone=79119201428');
});

document.getElementById('gotoCall').addEventListener('click', function() {
    window.open('../appointment/index.html');
});