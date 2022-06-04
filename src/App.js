import React, {useState} from 'react'
import Display from './components/Display.js';
import Button from './components/Button.js';
import Special from './components/Special.js';
import Screen from './components/Screen.js';

function App() {

  let buttons1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
  let buttons2 = ['sin', 'cos', 'tan', 'csc', 'scn', 'cot', 'arcsin', 'arccos', 'arctan', 'ⁿ√', '^', 'e', 'π', 'log', 'ln', '!', '%', '+', '-', 'x', '÷']
  let specialButtons = ['Delete', 'Clear', 'Change', 'Enter', 'Answer']

  const [clas, setClas] = useState(1)
  const [expression, setExpression] = useState('')
  const [history, setHistory] = useState('')
  const [answer, setAnswer] = useState('')

  function round(value, precision) {
    const exponent = Math.pow(10, precision);
    return Math.round(value * exponent) / exponent;
  }

  function factorial(x) {
    let ans = 1
    if (x >= 0) {
      for (let t = 2; t <= x; ++t) {
        ans *= t
      }
      return ans
    }

    return undefined

  }

  function math(ex) {

    let exp = ex.replace('e', JSON.stringify(Math.E))
    exp = exp.replace('π', Math.PI)

    if (exp.includes('arcsin')){
      return Math.asin(parseFloat(exp.substring(6)))
    }

    else if (exp.includes('arccos')){
      return Math.acos(parseFloat(exp.substring(6)))
    }

    else if (exp.includes('arctan')){
      return Math.atan(parseFloat(exp.substring(6)))
    }

    else if (exp.includes('sin')){
      return round(Math.sin(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('cos')){
      return round(Math.cos(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('tan')){
      return round(Math.tan(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('csc')){
      return 1 / round(Math.sin(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('scn')){
      return 1 / round(Math.cos(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('cot')){
      return 1 / round(Math.tan(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('√')){
      let root = parseFloat(exp)
      return Math.pow(parseFloat(exp.substring(JSON.stringify(root).length + 2)), 1/root)
    }

    else if (exp.includes('^')){
      return Math.pow(parseFloat(exp), parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

    else if (exp.includes('log')){
      return round(Math.log10(parseFloat(exp.substring(3))), 3)
    }

    else if (exp.includes('ln')){
      return round(Math.log(parseFloat(exp.substring(2))), 3)
    }

    else if (exp.includes('!')){
      return factorial(parseInt(exp))
    }

    else if (exp.includes('%')){
      return (parseFloat(exp)) % (parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

    else if (exp.includes('+')){
      return (parseFloat(exp)) + (parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

    else if (exp.includes('-')){
      return (parseFloat(exp)) - (parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

    else if (exp.includes('x')){
      return (parseFloat(exp)) * (parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

    else if (exp.includes('÷')){
      return (parseFloat(exp)) / (parseFloat(exp.substring(JSON.stringify(parseFloat(exp)).length + 1)))
    }

  }

  function change(type) {

    if (type === 'Change'){
      setClas(x => x === 1 ? 2 : 1)
    }

    else if (type === 'Delete') {
      if (expression === ''){
        alert("There is nothing to delete")
      }
      else {
        setExpression(expression.slice(0, -1))
      }
    }

    else if (type === 'Clear') {
      setExpression('')
      setHistory('')
    }

    else if (type === 'Enter') {
      setHistory(() => `${history}\n${expression} => ${math(expression)}`)
      setAnswer(math(expression))
      setExpression('')
    }

    else if (type === 'Answer') {
      setExpression(() => `${expression}${answer}`)
    }

    else {
      setExpression(() => `${expression}${type}`)
    }

  }

  return (
    <div>
      <Display />
      <Button buttons={clas === 1 ? buttons1 : buttons2} type={clas} change={change}/>
      <Special buttons={specialButtons} change={change}/>
      <Screen value={`${history}\n${expression}`}/>
    </div>
  )
}

export default App;
