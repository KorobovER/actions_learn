import { increment, decrement, getCountDisplay } from './counter'

let count = 0

document.body.innerHTML = `
    <h1>${getCountDisplay(count)}</h1>
    <button id="increase">Увеличить</button>
    <button id="decrease">Уменьшить</button>
`

document.getElementById('increase').onclick = () => {
  count = increment(count)
  document.querySelector('h1').innerHTML = getCountDisplay(count)
}

document.getElementById('decrease').onclick = () => {
  count = decrement(count)
  document.querySelector('h1').innerHTML = getCountDisplay(count)
}

alert('Привет')