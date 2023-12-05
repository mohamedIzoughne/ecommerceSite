// Start Toggle menu
const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    document.querySelector('.nav-list ul:first-child').classList.toggle('active')
})
// Product page: making a photo to the main image when clicking
const productImages = document.querySelectorAll('.sub-images img')
const mainImageHolder = document.querySelector('.main-image')

productImages.forEach(img => {
    img.addEventListener('click', (e) => {
        mainImageHolder.innerHTML = `<img src="${e.currentTarget.src}"></img>`
    })
})

// Start landing intro text effect
const sentence = ' Give Your Workout A New Style!'.split('')
const introText = document.getElementById('text')

let i = 0
let addCharInterval = setInterval(() => {
    if (i < sentence.length) {
        if (i === 20) {
            const span = document.createElement('span')
            introText.appendChild(span)
            introText.firstElementChild.innerHTML += sentence[i]
        } else if (i > 20) {
            introText.firstElementChild.innerHTML += sentence[i]
        } else {
            introText.innerHTML += sentence[i]
        }
        i++
    } else {
        setTimeout(() => {
            i = 0
            introText.innerHTML = ''
        }, 1000)
    }
}, 200);

// Coloring headings in form (account page) and translating form
const headings = document.querySelectorAll('.sections h3')
const inputsBox = document.querySelector('.both-inputs')
const loginHeading = document.querySelector('.sections .login')
const registerHeading = document.querySelector('.sections .register')

headings.forEach(heading => {
    heading.addEventListener('click', (e) => {
        headings.forEach(h => {
            h.classList.remove('active')
        })
        e.target.classList.add('active')
        moveInputsSection()
    })
})

const moveInputsSection = () => {
    if (registerHeading.classList.contains('active')) {
        inputsBox.classList.add('active')
    } else {
        inputsBox.classList.remove('active')
    }
}

// Scroll to top button
let toTop = document.getElementById("scroll-to-top");
window.onload = window.onscroll = function () {
    if (window.scrollY > 600) {
        toTop.style.transition = "5s";
        toTop.style.display = "block";
        toTop.onclick = function (e) {
            window.scrollTo(window.scrollX, 0)
        }
    } else {
        toTop.style.display = "none";
    }
}

const mainTitleArr = document.querySelectorAll('.main-title')
window.onscroll = () => {
    if (document.querySelector('.main-title').getBoundingClientRect().y >= 47.6875) {
        console.log('how are you');
    }
    mainTitleArr.forEach(ele => {
        if (ele.getBoundingClientRect().y >= 47.6875) {
            ele.classList.add('active')
        }
    })
}