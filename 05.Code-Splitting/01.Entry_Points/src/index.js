const component = () => {
  const element = document.createElement('h2')
  const Text = _.join(['Manually', 'Using', 'Code', 'Splitting'], ' ')
  element.innerText = Text
  return element
}

document.body.appendChild(component())