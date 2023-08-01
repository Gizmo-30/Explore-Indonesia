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
    searchinput = document.querySelector('.search');
    

searchIcon.addEventListener('click', (e) => {
    searchBlock.classList.add('active')

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.search')) {
            searchBlock.classList.remove('active')
        }
    })    
})

const burger = document.querySelector('.burger'),
    burgerContent = document.querySelector('.burger__content'),
    burgerOpen = document.querySelector('.nav__burger-icon'),
    burgerClose = document.querySelector('.burger__close');



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

// navLinks = () => {
    
// }



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

// if (window.innerWidth <= 900) {
//     const headernav = document.querySelector('.header__shadow'),
//          headerShadow = document.querySelector('.header__shadow'),
// }





