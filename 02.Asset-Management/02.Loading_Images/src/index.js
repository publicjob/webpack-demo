import imageUrl from './index.svg'

const component = () => {
  const element = document.createElement('img')
  element.src = imageUrl
  return element
}

document.body.appendChild(component())