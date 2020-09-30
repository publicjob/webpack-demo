import { EMLINK } from 'constants'
import _ from 'lodash'

const component = () => {
  const element = document.createElement('h1')
  element.innerText = _.join(['02.Creating', 'a', 'Bundle'], ' ')
  return element
}

document.body.appendChild(component())