import './app.css'
import Calculator from './Calculator.svelte'

const app = new Calculator({
  target: document.getElementById('app'),
})

export default app
