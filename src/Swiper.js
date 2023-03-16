"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solid_js_1 = require("solid-js");
const Swiper = (element, setSide) => {
    if (!element) {
        return;
    }
    let mouseDown = true;
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    (0, solid_js_1.onMount)(() => {
        element.addEventListener('touchstart', handleTouchStart, false);
        element.addEventListener('touchend', handleTouchEnd, false);
        element.addEventListener('mousedown', handleMouseDown, false);
        element.addEventListener('mouseup', handleMouseUp, false);
        element.addEventListener('mouseleave', handleMouseLeave);
    });
    (0, solid_js_1.onCleanup)(() => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('mouseleave', handleMouseLeave);
    });
    function handleTouchStart(event) {
        touchstartX = event.touches[0].clientX;
        touchstartY = event.touches[0].clientY;
    }
    function handleTouchEnd(event) {
        touchendX = event.changedTouches[0].clientX;
        touchendY = event.changedTouches[0].clientY;
        handleGesture();
    }
    function handleMouseDown(event) {
        mouseDown = true;
        touchstartX = event.clientX;
        console.log('whps');
    }
    function handleMouseUp(event) {
        if (!mouseDown) {
            return;
        }
        mouseDown = false;
        touchendX = event.clientX;
        console.log('shoahao');
        handleGesture();
    }
    function handleMouseLeave(event) {
        if (!mouseDown) {
            return;
        }
        mouseDown = false;
        touchendX = event.clientX;
        console.log('leave!');
        handleGesture();
    }
    function handleGesture() {
        if (touchendX < touchstartX) {
            setSide('front');
        }
        if (touchendX > touchstartX) {
            setSide('back');
        }
    }
};
exports.default = Swiper;
