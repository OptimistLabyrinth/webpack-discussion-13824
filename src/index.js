import _ from 'lodash'
import divModule02 from './module02'
import printMe from './print'
import './index.css'

function component1() {
  const element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  element.classList.add('index_margin_top_bottom')

  return element
}

function button1() {
  const button = document.createElement('button')
  button.innerHTML = 'Click Me to create New Element'
  button.classList.add('button')
  button.classList.add('index_margin_top_bottom')
  button.onclick = () => {
    document.body.appendChild(printMe())
  }

  return button
}

document.body.appendChild(component1())
document.body.appendChild(divModule02())
document.body.appendChild(button1())
