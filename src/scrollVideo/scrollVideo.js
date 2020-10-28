import { BonesBlock } from '@babylonjs/core';
import { Controller, Scene } from 'scrollmagic';

const controller = new Controller();
const sectionVideo = document.querySelector('.section--video');
const video = sectionVideo.querySelector('.section--video__video');

// Scenes
let scene = new Scene({
    duration: 3500,
    triggerElement: sectionVideo,
    triggerHook: 0
})
    .setPin(sectionVideo)
    .addTo(controller);

// execute when the scene reaches the end
scene.on('end', function (event) {
    // remove the added divs and interactions from scrollmagic
    scene.removePin(true);
    // remove the dom element for video
    sectionVideo.style.display = 'none';
    // scroll to the top of the page
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 300);
});

// Video Animation
let accelAmmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', (e) => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmmount;
    video.currentTime = delay;
}, 30);

setTimeout(() => {});
