//slider

const slides = document.querySelectorAll('.slide')
const sliderControls = document.querySelectorAll('.slider__buttons>button')
let currentSlide = 0
let isEnabled = true

function changeCurrentSlide(n) {
  currentSlide = (n + slides.length) % slides.length
}

function hideSlide(direction) {
  isEnabled = false
  slides[currentSlide].classList.add(direction)
  slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('slide--active', direction)
  })
}

function showSlide(direction) {
  slides[currentSlide].classList.add('slide--next', direction)
  slides[currentSlide].addEventListener('animationend', function () {
    this.classList.remove('slide--next', direction)
    this.classList.add('slide--active')
    isEnabled = true

  })
}

function previousSlide(n) {
  hideSlide('to-right')
  changeCurrentSlide(n - 1)
  showSlide('from-left')
}

function nextSlide(n) {
  hideSlide('to-left')
  changeCurrentSlide(n + 1)
  showSlide('from-right')

}

sliderControls[0].addEventListener('click', function () {
  if (isEnabled) {
    previousSlide(currentSlide)
  }
})

sliderControls[1].addEventListener('click', function () {
  if (isEnabled) {
    nextSlide(currentSlide)
  }
})


// turn off phone screen
const slidePhone = document.querySelectorAll('#slide-phone')

slidePhone.forEach(i => i.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('screen-off')
}))


// portfolio img  select
const portfolioImages = document.querySelectorAll('.portfolio__images>li>img')

portfolioImages.forEach(i => i.addEventListener('click', e => {
  portfolioImages.forEach(i => i.classList.remove('portfolio__images--selected'))
  e.target.classList.add('portfolio__images--selected')
}))


//portfolio shuffle
const portfolioImagesToSort = document.querySelector(".portfolio__images")

const filterBtns = document.querySelectorAll('.portfolio__filters-btn')
filterBtns.forEach(i => i.addEventListener('click', e => shuffle(portfolioImagesToSort)))

function shuffle(ul) {
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}


//nav scroll
document.addEventListener('scroll', onScroll)

function onScroll(event) {
  const curPos = window.scrollY
  const divs = document.querySelectorAll('.wrapper>*')
  const links = document.querySelectorAll('.navigation__link a')

  divs.forEach(el => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active')
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active')
        }
      })
    }
  })

}


//submit

const contactForm = document.querySelector('.contact-form')
const submitBtn = document.querySelector('.contact-form__send-btn')
const modalOkBtn = document.querySelector('.modal__ok-btn')
const modal = document.querySelector('.modal')
const subject = document.getElementById('subject')
const describe = document.querySelector('#describe')
let subjectValue = document.getElementById('subject__value')
let descriptionValue = document.querySelector('#description__value')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()


  subjectValue.innerText = subject.value ? `Subject: ${subject.value}` : 'No subject'
  descriptionValue.innerText = describe.value ? `Decription: ${describe.value}` : 'No description'


  modal.classList.add('modal--active')

})

modalOkBtn.addEventListener('click', e => {
  modal.classList.remove('modal--active')
  contactForm.reset()
})

// modal.addEventListener('click', e => {
//   modal.classList.remove('modal--active')
//   contactForm.reset()
// })
