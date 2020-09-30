const component = () => {
  const element = document.createElement('h1')
  element.innerHTML = _.join(['01.Basic', 'Setup'], ' ')
  return element
}
document.body.appendChild(component())