function display_modal() {
    let modal = document.getElementById("modal")
    modal.classList.add("show")
}

function close_modal() {
    let modal = document.getElementById("modal")
    modal.classList.remove("show")
}

function slide_automation() {
    const js_slides = document.querySelectorAll('.slide-child')
    for (let index = 0; index < js_slides.length; index++) {
        const js_slide = js_slides[index];
        if (!js_slide.classList.contains('hidden')) {
            js_slide.classList.add('hidden')

            if (index == js_slides.length - 1)
                index = -1
            js_slides[index + 1].classList.remove('hidden')
            break
        }
    }
}

function switch_mobile_menu() {
    let bar_item = document.getElementById('mobile-menu')
    if (bar_item.clientHeight < 48) {
        bar_item.classList.add('toogleON')
    } else {
        bar_item.classList.remove('toogleON')
    }
}