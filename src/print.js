let clickCount = 1

export default function printMe() {
  const message = document.createElement('div')
  message.innerHTML = `button above is clicked! ${clickCount} 🔥🔥🔥`
  ++clickCount

  return message
}
