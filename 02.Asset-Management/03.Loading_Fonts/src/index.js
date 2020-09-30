import './index.css'

const component = () => {
  const element = document.createElement('i')
  element.classList.add('iconfont')
  element.classList.add('icon-favorite')
  element.classList.add('icon')
  return element
}

document.body.appendChild(component())

