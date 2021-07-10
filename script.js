const button = document.querySelector('.button')
const containers = document.querySelectorAll('.container')

const ulAll = document.querySelectorAll('ul')
const list = document.querySelector('.list')
const buttons = document.querySelectorAll('.button')

let mainObject = {
  activeFirstMenu: 'main-0',
  menus: [2, 1, 1],
}

let getIndexFromSome = (string) => {
  const indexOfDash = string.indexOf('-')
  const newIndex = string.slice(indexOfDash + 1, string.length)
  return newIndex
}

let myButton = 0
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = +mainObject.activeFirstMenu
    let mainElement = document.getElementById(`main-${id}`)
    myButton = button

    event.stopPropagation()
    if (button.parentNode.parentNode.classList.contains('list')) {
      console.log('before ' + mainObject.activeFirstMenu)
      cleareActiveClasses(mainObject.activeFirstMenu)
      mainObject.activeFirstMenu = button.parentNode.id
      button.parentNode.classList.add('containerActive')
      console.log('after ' + mainObject.activeFirstMenu)
    } else {
      button.parentNode.parentNode.classList.add('visuallyHidden')
      button.parentNode.classList.add('containerActive')
      mainElement.append(myButton)
    }

    showSubMenu(button.parentNode)
  })
})

function cleareActiveClasses(id) {
  console.log(document.getElementById(id))
  document.getElementById(id).classList.remove('containerActive')
}

function showSubMenu(container) {
  container.children[1].classList.add('subListActive')
}
