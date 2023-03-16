import { onCleanup, onMount } from 'solid-js'

const Swiper = (element: HTMLElement, setSide: (side: string) => void) => {
    if (!element) {
        return
    }
    let mouseDown = true
    let touchstartX = 0
    let touchstartY = 0
    let touchendX = 0
    let touchendY = 0

    onMount(() => {
        element.addEventListener('touchstart', handleTouchStart, false)
        element.addEventListener('touchend', handleTouchEnd, false)
        element.addEventListener('mousedown', handleMouseDown, false)
        element.addEventListener('mouseup', handleMouseUp, false)
        element.addEventListener('mouseleave', handleMouseLeave)
    })

    onCleanup(() => {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchend', handleTouchEnd)
        element.removeEventListener('mousedown', handleMouseDown)
        element.removeEventListener('mouseup', handleMouseUp)
        element.removeEventListener('mouseleave', handleMouseLeave)
    })

    function handleTouchStart(event: TouchEvent) {
        touchstartX = event.touches[0].clientX
        touchstartY = event.touches[0].clientY
    }

    function handleTouchEnd(event: TouchEvent) {
        touchendX = event.changedTouches[0].clientX
        touchendY = event.changedTouches[0].clientY
        handleGesture()
    }

    function handleMouseDown(event: MouseEvent) {
        mouseDown = true
        touchstartX = event.clientX
        console.log('whps')
    }

    function handleMouseUp(event: MouseEvent) {
        if (!mouseDown) {
            return
        }
        mouseDown = false
        touchendX = event.clientX
        console.log('shoahao')
        handleGesture()
    }

    function handleMouseLeave(event: MouseEvent) {
        if (!mouseDown) {
            return
        }
        mouseDown = false
        touchendX = event.clientX
        console.log('leave!')
        handleGesture()
    }

    function handleGesture() {
        if (touchendX < touchstartX) {
            setSide('front')
        }
        if (touchendX > touchstartX) {
            setSide('back')
        }
    }
}

export default Swiper
