const cars = document.querySelectorAll('.car')
const cities = document.querySelectorAll('.city')
const button = document.querySelector('.button')
const containers = document.querySelectorAll('.container')

containers.forEach((container) => {
  container.addEventListener('click', (event) => {
    event.stopPropagation()
    cleareActiveClasses(containers)
    container.classList.add('containerActive')
    showSubMenu(container)
  })
})

function cleareActiveClasses(items) {
  items.forEach((item) => {
    item.classList.contains('containerActive')
      ? item.classList.remove('containerActive')
      : null

    if (item.children[1]) {
      item.children[1].classList.contains('subListActive')
        ? item.children[1].classList.remove('subListActive')
        : null
    }
  })
}

function showSubMenu(container) {
  console.log(container.children[1])
  container.children[1].classList.add('subListActive')
  console.log(container.children[1])
}
