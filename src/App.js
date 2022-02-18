import React, {useState} from 'react'
import Display from './components/Display.js';
import Button from './components/Button.js';
import Special from './components/Special.js';
import Screen from './components/Screen.js';

function App() {

  let buttons1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let buttons2 = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'arcsin', 'arccos', 'arctan', '√', 'ⁿ√', 'x²', 'xⁿ', 'e', 'π', 'log', 'ln', 'x!', '(', ')', '%', '+', '-', 'x', '÷']
  let specialButtons = ['Delete', 'Clear', 'Change', 'Enter']

  const [clas, setClas] = useState(1)
  const [expression, setExpression] = useState('')

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
    }

    else if (type === 'Enter') {

    }

    else {
      setExpression(() => `${expression}${type}`)
    }

  }

  console.log(expression)

  return (
    <div>
      <Display />
      <Button buttons={clas === 1 ? buttons1 : buttons2} type={clas} change={change}/>
      <Special buttons={specialButtons} change={change}/>
      <Screen />
    </div>
  )
}

export default App;
