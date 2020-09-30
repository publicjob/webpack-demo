import _ from 'lodash'

const component = () => {
  const element = document.createElement('h2')
  const Text = 'Automaticlly Using Code Splitting'
  element.innerText = Text
  return element
}

document.body.appendChild(component())