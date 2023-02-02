console.log('hi')

const keys = document.querySelector('.calculator-keys')
let operationEl = document.querySelector('#operands')
let resultEl = document.querySelector('#result')
let prevValue = ''
let prevResult = 0

function inputDigit(digit) {
  operationEl.innerHTML += digit
}

function handleOperator(operator) {
  prevResult = eval(operationEl.innerHTML)
  operationEl.innerHTML = prevResult + ` ${operator} `
}

function calculate() {
  const check = eval(operationEl.innerHTML)
  if (isNaN(check) || !isFinite(check)) {
    console.log('Não dividireis por 0, repita comigo')
    resultEl.innerHTML = 'Não faça isso'
  } else {
    resultEl.innerHTML = eval(operationEl.innerHTML)
  }
}

function reset() {
  prevValue = ''
  operationEl.innerHTML = ''
  resultEl.innerHTML = ''
}

function clearEntry() {
  // operationEl.innerHTML = prevValue
  operationEl.innerHTML = prevValue.substring(
    0,
    operationEl.innerHTML.length - 1
  )
}

keys.addEventListener('click', e => {
  const { target } = e
  const { value } = target

  if (!target.matches('button')) {
    return
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
      handleOperator(value)
      break
    case '=':
      calculate()
      break
    case '.':
      inputDigit('.')
      break
    case 'clear-entry':
      clearEntry()
      break
    case 'all-clear':
      reset()
      break
    default:
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value)
      }
  }
})

document.addEventListener('keydown', e => {
  let patternForNumbers = /[0-9]/g
  let patternForOperators = /[+\-*\/]/g

  if (e.key.match(patternForNumbers)) {
    inputDigit(Number(e.key))
  }

  if (e.key.match(patternForOperators)) {
    handleOperator(e.key)
  }

  if (e.key === '.' || e.key === ',') {
    inputDigit('.')
  }

  if (e.key === 'Enter' || e.key === '=') {
    console.log(e.key)
    calculate()
  }

  if (e.key === 'Backspace') {
    clearEntry()
  }

  if (e.key === 'Delete') {
    reset()
  }
})
