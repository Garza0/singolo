const NAVIGATION = document.getElementById('navigation')

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('li>a').forEach(el => el.classList.remove('header__navigation--active'))
  event.target.classList.add('header__navigation--active')
})


const slidePhone = document.querySelectorAll('#slide-phone')

slidePhone.forEach(i => i.addEventListener('click', e => {
  e.target.previousElementSibling.classList.toggle('screen-off')
}))