const body = document.body

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
if (isMobile.any()) {
    body.classList.add('_touch')
} else {
    body.classList.add('_screen')
}


const searchIcon = document.querySelector('.search__icon'),
    searchBlock = document.querySelector('.search'),
    searchinput = document.querySelector('.search'),
    // slider
    sliderBlock = document.querySelector('.slider__block'),
    sliderTrack = document.querySelector('.slider__track'),
    btnPrev = document.querySelector('.slider .button_icon_arrowLeft'),
    btnNext = document.querySelector('.slider .button_icon_arrowRight'),
    sliderItem = [...document.querySelectorAll('.slider__item')],
    sliderIndicator = [...document.querySelectorAll('.slider__indicator')],
    // burger
    burger = document.querySelector('.burger'),
    burgerContent = document.querySelector('.burger__content'),
    burgerOpen = document.querySelector('.nav__burger-icon'),
    burgerClose = document.querySelector('.burger__close');
    

searchIcon.addEventListener('click', (e) => {
    searchBlock.classList.add('active')

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.search')) {
            searchBlock.classList.remove('active')
        }
    })    
})



burgerOpen.addEventListener('click', (e) => {
    burger.classList.add('active')
    body.classList.add('lock')
    e.stopPropagation()

    window.addEventListener('click', (e) => {
        if (e.target = burgerClose) {
            burger.classList.remove('active')
            body.classList.remove('lock')
        }
    })
})


if (window.innerWidth <= 1024) {
    const navLinks = document.querySelector('.nav__links'),
        navLinksA = [...document.querySelectorAll('.nav__links a')],
        headerMessangers = document.querySelector('.header__massengers'),
        headerMessanger = document.querySelectorAll('.header__massengers a'),
        nav = document.querySelector('.nav');
    burgerContent.appendChild(navLinks)
    burgerContent.appendChild(headerMessangers)
    headerMessangers.classList.add('burger__massengers')
    headerMessanger.forEach(element => {
        element.classList.add('burger__massenger')
    });
    navLinksA.forEach(element => {
        element.classList.add('burger__link')
    });
    navLinks.classList.add('burger__links')

    if (document.querySelector('.nav ul') == null) {
        nav.style = `justify-content: space-between`
    } else nav.style = `justify-content: flex-start`
}

const videoBlock = document.querySelectorAll('.video'),
    video = document.querySelector('.video video');

videoBlock.forEach(element => {
    element.addEventListener('click', () => {
        if (video.paused) {
            video.play()
            element.classList.add('video__state_playing')
            // video.setAttribute('controls' , '')
        } else {
            video.pause()
            element.classList.remove('video__state_playing')
        }
    })
});


// SLIDER

var position = 0

var slidesToShow
if (window.innerWidth <= 1024) {
    slidesToShow = 2
} if (window.innerWidth <= 768) {
    slidesToShow = 1
} else slidesToShow = 3

var slidesToScroll = slidesToShow
var gap = parseFloat(window.getComputedStyle(sliderTrack, null).getPropertyValue("column-gap"))
var itemWidth = Math.ceil((sliderBlock.clientWidth - gap * (slidesToShow - 1)) / slidesToShow)

for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style = `min-width: ${itemWidth}px`
}

var index = slidesToShow

checkBtn()

btnNext.addEventListener('click', () => {
    let moveSize = slidesToScroll * itemWidth + gap * slidesToScroll 
    let itemLeft = Math.ceil(sliderItem.length - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth)
    position -= itemLeft >= slidesToScroll ? moveSize : itemLeft * itemWidth + gap
    moveAct(position)
    index += slidesToShow
    sliderIndicator[index - 1].classList.add('active')
    sliderIndicator[index - 2].classList.add('active')
    sliderIndicator[index - 3].classList.add('active')
})

btnPrev.addEventListener('click', () => {
    let moveSize = slidesToScroll * itemWidth + gap * slidesToScroll
    let itemLeft = Math.floor(Math.abs(position) / itemWidth)
    position += itemLeft >= slidesToScroll ? moveSize : itemLeft * itemWidth + gap 
    moveAct(position)
    index -= slidesToShow
    sliderIndicator[index - 1].classList.add('active')
    sliderIndicator[index - 2].classList.add('active')
    sliderIndicator[index - 3].classList.add('active')
})

function moveAct(position) {
    sliderTrack.style = `transform: translateX(${position}px)`
    checkBtn()
    indicators()
}

function indicators() {
    sliderIndicator.forEach(element => {
        element.classList.remove('active')
    });
    
}

function checkBtn() {
    if (position === 0) {
        btnPrev.classList.add('disabled')
    } else btnPrev.classList.remove('disabled')

    if (position <= - (sliderItem.length - slidesToShow) * itemWidth) {
        btnNext.classList.add('disabled')
    } else btnNext.classList.remove('disabled')
}



