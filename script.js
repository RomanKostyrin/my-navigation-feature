const button = document.querySelector('.button')
const containers = document.querySelectorAll('.container')
const ulAll = document.querySelectorAll('ul')
const list = document.querySelector('.list')
const buttons = document.querySelectorAll('.button')

let myButton = 0

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = +getIndexFromSome(mainObject.activeFirstMenu)
    const mainElement = document.getElementById(mainObject.activeFirstMenu)
    myButton = button
    event.stopPropagation()
    if (button.parentNode.parentNode.classList.contains('list')) {
      cleareActiveClasses(mainObject.activeFirstMenu)
      button.parentNode.classList.add('containerActive')
    } else {
      myButton.classList.add('buttonSecond')
      mainObject.menus[+getIndexFromSome(mainObject.activeFirstMenu)] = 3
      hideElements(button)
      button.parentNode.parentNode.parentNode.classList.add('containerChoosen')
      button.parentNode.classList.add('containerActive')
      mainElement.insertBefore(myButton, button.parentNode.parentNode)
    }
  })
})
function hideElements(element) {
  for (el of element.parentNode.parentNode.children) {
    if (el !== element.parentNode) {
      el.classList.add('visuallyHidden')
    }
  }
}

function cleareActiveClasses(id) {
  const index = getIndexFromSome(id)
  mainObject.menus[index] = 1
  document.getElementById(id).classList.remove('containerActive')
}

let getIndexFromSome = (string) => {
  const indexOfDash = string.indexOf('-')
  const newIndex = string.slice(indexOfDash + 1, string.length)
  return newIndex
}
