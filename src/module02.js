import _ from 'lodash'
import './module02.css'

export default function divModule02() {
  const element = document.createElement('div')

  const div1 = document.createElement('div')
  div1.innerHTML = _.join(['I\'m', 'from', 'Module', '02'], ' ')
  div1.classList.add('module02_div_text')
  div1.classList.add('module02_margin')

  const div2 = document.createElement('div')
  div2.innerHTML = 'good evening 😇'
  div2.classList.add('module02_margin')

  element.appendChild(div1)
  element.appendChild(div2)

  return element
}
