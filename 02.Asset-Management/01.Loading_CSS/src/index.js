import './index.css'
import _ from 'lodash'

const component = () => {
  const element = document.createElement('h1')
  element.innerText = _.join(['Hello','CSS-Module'], '! ')
  return element
}

document.body.appendChild(component())