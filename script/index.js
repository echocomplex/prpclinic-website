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
//     trigger: "welcome",
//     start: "top center", // Когда верх элемента достигает центра экрана
//     onEnter: () => {
//         document.documentElement.style.setProperty('--bg-color', '#FFF'); // Изменяем значение CSS переменной
//         document.documentElement.style.setProperty('--text-color', '#77A6F7');
//     },
//     onLeaveBack: () => {
//         document.documentElement.style.setProperty('--text-color', '#FFF');
//         document.documentElement.style.setProperty('--bg-color', '#77A6F7'); // Возвращаем значение при прокрутке вверх
//     }
// });