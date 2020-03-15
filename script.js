const NAVIGATION = document.getElementById('navigation')

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('li>a').forEach(el => el.classList.remove('header__navigation--active'))
  event.target.classList.add('header__navigation--active')
})


const slidePhone = document.querySelectorAll('#slide-phone')

slidePhone.forEach(i => i.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('screen-off')
}))

const portfolioImages = document.querySelectorAll('.portfolio__images>li>img')

portfolioImages.forEach(i => i.addEventListener('click', e => {
  portfolioImages.forEach(i => i.classList.remove('portfolio__images--selected'))
  e.target.classList.add('portfolio__images--selected')
}))

const portfolioImagesToSort = document.querySelector(".portfolio__images")


const filterBtns = document.querySelectorAll('.portfolio__filters-btn')
filterBtns.forEach(i => i.addEventListener('click', e => shuffle(portfolioImagesToSort)))

function shuffle(ul) {
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}